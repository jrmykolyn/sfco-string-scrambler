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
