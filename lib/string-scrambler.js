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
