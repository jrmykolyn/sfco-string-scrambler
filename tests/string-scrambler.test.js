// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
import test from 'ava';

// Project
const stringScrambler = require( '../lib/string-scrambler' );

// --------------------------------------------------
// DEFINE TESTS
// --------------------------------------------------
test( 'Function is "importable"', ( t ) => {
	t.is( typeof stringScrambler, 'function' );
} );

test( 'When invoked without an argument, function throws an error', ( t ) => {
	t.throws( () => { stringScrambler(); } );
} );

test( 'When invoked with a non-string value, function throws an error', ( t ) => {
	t.throws( () => { stringScrambler( 1 ); } );
} );

test( 'When invoked with an empty string, function throws an error', ( t ) => {
	t.throws( () => { stringScrambler( '' ); } );
} );

test( 'When invoked with a valid string, function returns a "scrambled" string of equal length.', ( t ) => {
	var input = 'This is the input string';
	var output = stringScrambler( input );

	t.is( input.length, output.length );
} );
