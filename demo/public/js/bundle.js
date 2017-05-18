(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const CHARS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = CHARS;

},{}],2:[function(require,module,exports){
// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Project
const CHARS = require( './chars' );
const NUMS = require( './nums' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var DATA = {
	CHARS,
	NUMS
};

var ALL = Object.keys( DATA )
	.map( ( k ) => { return DATA[ k ]; } )
	.reduce( ( a, b ) => { return a.concat( b ); }, [] );

// Add `ALL` to `DATA`.
DATA.ALL = ALL;

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = DATA;

},{"./chars":1,"./nums":3}],3:[function(require,module,exports){
// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const CHARS = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9'
];

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = CHARS;

},{}],4:[function(require,module,exports){
// DECLARE VARS
var stringScrambler = require( '../../../index' );
var el = document.getElementById( 'msg' );
var msgText = el.innerHTML;

// INIT
setInterval( function() {
	el.innerHTML = stringScrambler( msgText );
}, 1500 );

},{"../../../index":5}],5:[function(require,module,exports){
// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Project
const stringScrambler = require( './lib/string-scrambler' );

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = stringScrambler;

},{"./lib/string-scrambler":6}],6:[function(require,module,exports){
// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
const { sample } = require( 'sfco-js-utils' ).ArrayUtils;

// Project
const DATA = require( '../data' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const { ALL } = DATA;

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function stringScrambler( string ) {
	string = ( string && typeof string === 'string' ) ? string : null;

	if ( string ) {
		return string.split( '' )
			.map( char => { return ( char === ' ' ) ? ' ' : sample( ALL ); } )
			.join( '' );
	} else {
		throw new Error( '`stringScrambler` must invoked with a non-empty string as it\'s first argument.' );
	}
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = stringScrambler;

},{"../data":2,"sfco-js-utils":7}],7:[function(require,module,exports){
// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Project
const ArrayUtils = require( './lib/array-utils' );

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = {
	ArrayUtils
}

},{"./lib/array-utils":8}],8:[function(require,module,exports){
// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
/**
 * Given an array, function returns a random item.
 *
 * Function returns `null` if invoked with empty array/non-array values.
 *
 * @param {Array} `arr`
 * @return {any|null}
 */
function sample( arr ) {
	if ( !arr || !Array.isArray( arr ) || !arr.length ) {
		return null;
	}

	return arr[ Math.floor( Math.random() * arr.length ) ];
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = {
	sample
}

},{}]},{},[4])