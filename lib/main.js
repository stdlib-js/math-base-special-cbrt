/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cbrt.c?view=markup}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/

'use strict';

// MODULES //

var FLOAT64_SMALLEST_NORMAL = require( '@stdlib/constants-float64-smallest-normal' );
var SIGN_MASK = require( '@stdlib/constants-float64-high-word-sign-mask' );
var ABS_MASK = require( '@stdlib/constants-float64-high-word-abs-mask' );
var getHighWord = require( '@stdlib/number-float64-base-get-high-word' );
var setHighWord = require( '@stdlib/number-float64-base-set-high-word' );
var isinfinite = require( '@stdlib/math-base-assert-is-infinite' );
var fromWords = require( '@stdlib/number-float64-base-from-words' );
var toWords = require( '@stdlib/number-float64-base-to-words' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var polyval = require( './polyval_p.js' );


// VARIABLES //

// 2**32 - 1 = 4294967295 => 11111111111111111111111111111111
var HIGH_WORD_MASK = 4294967295>>>0; // asm type annotation

// 2**31 + 2**30 = 3221225472 => 11000000000000000000000000000000
var LOW_WORD_MASK = 3221225472>>>0; // asm type annotation

// 2**54
var TWO_54 = 18014398509481984.0;

// 2**31 = 0x80000000 = 2147483648 => 1 00000000000 00000000000000000000
var TWO_31 = 0x80000000>>>0; // asm type annotation

// 0x00000001 = 1 => 0 00000000000 00000000000000000001
var ONE = 0x00000001>>>0; // asm type annotation

// B1 = (1023-1023/3-0.03306235651)*2**20
var B1 = 715094163>>>0; // asm type annotation

// B2 = (1023-1023/3-54/3-0.03306235651)*2**20
var B2 = 696219795>>>0; // asm type annotation

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000
var FLOAT64_SMALLEST_NORMAL_HIGH_WORD = getHighWord( FLOAT64_SMALLEST_NORMAL ); // eslint-disable-line id-length

// Words workspace:
var WORDS = [ 0>>>0, 0>>>0 ]; // asm type annotation


// MAIN //

/**
* Computes the cube root of a double-precision floating-point number.
*
* ## Method
*
* 1.  Rough cube root to \\( 5 \\) bits:
*
*     ```tex
*     \sqrt\[3\]{2^e (1+m)} \approx 2^(e/3) \biggl(1 + \frac{(e \mathrm{mod}\ 3) + m}{3}\biggr)
*     ```
*
*     where \\( e \\) is a nonnegative integer, \\( m \\) is real and in \\( \[0, 1) \\), and \\( / \\) and \\( \mathrm{mod} \\) are integer division and modulus with rounding toward \\( -\infty \\).
*
*     The RHS is always greater than or equal to the LHS and has a maximum relative error of about \\( 1 \\) in \\( 16 \\).
*
*     Adding a bias of \\( -0.03306235651 \\) to the \\( (e \mathrm{mod} 3+ m )/ 3 \\) term reduces the error to about \\( 1 \\) in \\( 32 \\).
*
*     With the IEEE floating point representation, for finite positive normal values, ordinary integer division of the value in bits magically gives almost exactly the RHS of the above provided we first subtract the exponent bias (\\( 1023 \\) for doubles) and later add it back.
*
*     We do the subtraction virtually to keep \\( e \geq 0 \\) so that ordinary integer division rounds toward \\( -\infty \\); this is also efficient.
*
* 2.  New cube root to \\( 23 \\) bits:
*
*     ```tex
*     \sqrt[3]{x} = t \cdot \sqrt\[3\]{x/t^3} \approx t \mathrm{P}(t^3/x)
*     ```
*
*     where \\( \mathrm{P}(r) \\) is a polynomial of degree \\( 4 \\) that approximates \\( 1 / \sqrt\[3\]{r} \\) to within \\( 2^{-23.5} \\) when \\( |r - 1| < 1/10 \\).
*
*     The rough approximation has produced \\( t \\) such than \\( |t/sqrt\[3\]{x} - 1| \lesssim 1/32 \\), and cubing this gives us bounds for \\( r = t^3/x \\).
*
* 3.  Round \\( t \\) away from \\( 0 \\) to \\( 23 \\) bits (sloppily except for ensuring that the result is larger in magnitude than \\( \sqrt\[3\]{x} \\) but not much more than \\( 2 \\) 23-bit ulps larger).
*
*     With rounding toward zero, the error bound would be \\( \approx 5/6 \\) instead of \\( \approx 4/6 \\).
*
*     With a maximum error of \\( 2 \\) 23-bit ulps in the rounded \\( t \\), the infinite-precision error in the Newton approximation barely affects the third digit in the final error \\( 0.667 \\); the error in the rounded \\( t \\) can be up to about \\( 3 \\) 23-bit ulps before the final error is larger than \\( 0.667 \\) ulps.
*
* 4.  Perform one step of a Newton iteration to get \\( 53 \\) bits with an error of \\( < 0.667 \\) ulps.
*
* @param {number} x - input value
* @returns {number} cube root
*
* @example
* var v = cbrt( 64.0 );
* // returns 4.0
*
* @example
* var v = cbrt( 27.0 );
* // returns 3.0
*
* @example
* var v = cbrt( 0.0 );
* // returns 0.0
*
* @example
* var v = cbrt( -9.0 );
* // returns ~-2.08
*
* @example
* var v = cbrt( NaN );
* // returns NaN
*/
function cbrt( x ) {
	var sgn;
	var hx;
	var hw;
	var r;
	var s;
	var t;
	var w;
	if (
		x === 0.0 || // handles +-0
		isnan( x ) ||
		isinfinite( x )
	) {
		return x;
	}
	hx = getHighWord( x )>>>0;
	sgn = (hx & SIGN_MASK)>>>0;
	hx &= ABS_MASK;

	// Rough cbrt...
	if ( hx < FLOAT64_SMALLEST_NORMAL_HIGH_WORD ) {
		t = TWO_54 * x;
		hw = ( getHighWord( t )&ABS_MASK )>>>0;
		hw = ( ( (hw/3)>>>0 ) + B2 )>>>0;
		t = fromWords( sgn|hw, 0 );
	} else {
		t = 0.0;
		hw = ( ( (hx/3)>>>0 ) + B1 )>>>0;
		t = setHighWord( t, sgn|hw );
	}
	// New cbrt...
	r = ( t*t ) * ( t/x );
	t *= polyval( r );

	// Round `t` away from `0` to `23` bits...
	toWords.assign( t, WORDS, 1, 0 );
	if ( WORDS[ 1 ]&TWO_31 ) {
		// Perform manual addition, since we are split across two words...
		WORDS[ 0 ] += ONE;  // carry the one
		WORDS[ 1 ] &= ~TWO_31; // clear the bit
	} else {
		WORDS[ 1 ] |= TWO_31;
	}
	t = fromWords( WORDS[0]&HIGH_WORD_MASK, WORDS[1]&LOW_WORD_MASK );

	// Newton iteration...
	s = t * t; // `t*t` is exact
	r = x / s; // error `<= 0.5` ulps; `|r| < |t|`
	w = t + t; // `t+t` is exact
	r = ( r-t ) / ( w+r ); // `r-t` is exact; `w+r ~= 3*t`
	t += t * r; // error `<= 0.5 + 0.5/3 + eps`

	return t;
}


// EXPORTS //

module.exports = cbrt;
