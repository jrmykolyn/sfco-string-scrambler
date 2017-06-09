(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const ALPHA = [
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
module.exports = ALPHA;

},{}],2:[function(require,module,exports){
// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Project
const ALPHA = require( './alpha' );
const NUMS = require( './nums' );
const SYMBOLS = require( './symbols' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var DATA = {
	ALPHA,
	NUMS,
	SYMBOLS
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

},{"./alpha":1,"./nums":3,"./symbols":4}],3:[function(require,module,exports){
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
// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const SYMBOLS = [
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'?'
];

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = SYMBOLS;

},{}],5:[function(require,module,exports){
module.exports = {
	restrictTo: 'ALL'
};

},{}],6:[function(require,module,exports){
( function() {
	// --------------------------------------------------
	// DECLARE VARS
	// --------------------------------------------------
	var stringScrambler = require( '../../../index' );

	// Elems.
	var demo = document.getElementById( 'demo' );

	// Examples
	var examples = [
		{
			description: 'Default example.',
			text: 'Input Text'
		}
	];

	// --------------------------------------------------
	// DECLARE FUNCTIONS
	// --------------------------------------------------
	function init( examples ) {
		examples.forEach( function( example ) {
			var html = buildExampleElems( example );

			demo.appendChild( html );
		} );

		addEventListeners();
	}

	function buildExampleElems( data ) {
		var wrapper = document.createElement( 'article' );
		wrapper.classList.add( 'example' );

		if ( data.options ) {
			var optionsStr = Object.keys( data.options )
				.map( ( key ) => {
					return [ key, data.options[ key ] ];
				} )
				.reduce( ( a, b ) => {
					a += `${b[0]}:${b[1]};`;

					return a;
				}, '' );

			wrapper.setAttribute( 'data-options', optionsStr );
		}

		var description = document.createElement( 'p' );
		description.innerHTML = data.description || '/// TEMP - FALLBACK';

		var targetWrap = document.createElement( 'div' );
		targetWrap.classList.add( 'target-wrap' );

		var target = document.createElement( 'h1' );
		target.classList.add( 'target' );
		target.innerHTML = data.text || '/// TEMP - FALLBACK';

		var btn = document.createElement( 'button' );
		btn.innerHTML = 'Scramble';

		targetWrap.appendChild( target );
		wrapper.appendChild( description );
		wrapper.appendChild( targetWrap );
		wrapper.appendChild( btn );

		return wrapper;
	}

	function getOptions( node ) {
		if ( !node || !node.getAttribute( 'data-options' ) ) {
			return null;
		} else {

			return node.getAttribute( 'data-options' )
				.split( ';' )
				.reduce( ( a, b ) => {
					return ( !!b ) ? a.concat( b ) : a;
				}, [] )
				.map( function( opt ) {
					return opt.replace( / /gmi, '' );
				} )
				.map( function( opt ) {
					return opt.split( ':' );
				} )
				.reduce( function( obj, opt ) {
					var key = opt[ 0 ];
					var value = opt[ 1 ];

					// Parse value
					if ( value.toString().toLowerCase() === 'true' || value.toString().toLowerCase() === 'false' ) {
						value = ( value === 'true' );
					}

					if ( !isNaN( +value ) ) {
						value = +value;
					}

					obj[ key ] = value;

					return obj;
				}, {} );
		}
	}

	function addEventListeners() {
		var btns = document.querySelectorAll( 'button' );

		btns.forEach( function( button ) {
			button.addEventListener( 'click', function() {
				var parent = this.parentElement;
				var target = parent.querySelector( '.target' );
				var input = target.innerHTML;
				var options = getOptions( parent ) || {};
				var output = stringScrambler( input, options );

				target.innerHTML = output;
			} );
		} );
	}

	// --------------------------------------------------
	// INIT
	// --------------------------------------------------
	init( examples );
} )();

},{"../../../index":7}],7:[function(require,module,exports){
// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Project
const stringScrambler = require( './lib/string-scrambler' );

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = stringScrambler;

},{"./lib/string-scrambler":8}],8:[function(require,module,exports){
// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
const { sample } = require( 'sfco-js-utils' ).ArrayUtils;

// Project
const DEFAULTS = require( '../data/defaults' );
const CHARS = require( '../data/chars' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var SETTINGS = {};

var charSetName;
var charSet;

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function stringScrambler( string, options ) {
	// Re-assign args.
	string = ( string && typeof string === 'string' ) ? string : null;
	options = ( options && typeof options === 'object' ) ? options : {};

	// Update settings.
	SETTINGS = Object.assign( {}, DEFAULTS, options );

	// Update `charSet`-related vars.
	charSetName = SETTINGS.restrictTo.toString().toUpperCase();
	charSet = ( charSetName in CHARS ) ? CHARS[ charSetName ] : CHARS.ALL;

	// Check for presence of `userChars`, override `charSet` if matched && valid.
	if ( Array.isArray( SETTINGS.useChars ) && SETTINGS.useChars.length ) {
		charSet = SETTINGS.useChars;
	}

	if ( string ) {
		return string.split( '' )
			.map( char => { return ( char === ' ' ) ? ' ' : sample( charSet ); } )
			.join( '' );
	} else {
		throw new Error( '`stringScrambler` must invoked with a non-empty string as it\'s first argument.' );
	}
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = stringScrambler;

},{"../data/chars":2,"../data/defaults":5,"sfco-js-utils":9}],9:[function(require,module,exports){
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

},{"./lib/array-utils":10}],10:[function(require,module,exports){
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

},{}]},{},[6])