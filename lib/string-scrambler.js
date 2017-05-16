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
	return string.split( '' )
		.map( char => { return ( char === ' ' ) ? ' ' : sample( ALL ); } )
		.join( '' );
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = stringScrambler;
