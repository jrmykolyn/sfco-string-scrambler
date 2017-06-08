// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Project
const ALPHA = require( './alpha' );
const NUMS = require( './nums' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var DATA = {
	ALPHA,
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
