/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
*/

'use strict';

var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );
var isInfinitef = require( './../lib' );

console.log( isInfinitef( PINF ) );
// => true

console.log( isInfinitef( NINF ) );
// => true

console.log( isInfinitef( 5.0 ) );
// => false

console.log( isInfinitef( NaN ) );
// => false
