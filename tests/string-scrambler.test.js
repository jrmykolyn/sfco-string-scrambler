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

test.todo( 'When invoked with an `options` argument, function does not throw an error' );

test.todo( 'When invoked with an `options` argument containing a valid `restrictTo` property, function restricts the output to the correct characters.' );

test.todo( 'When invoked with an `options` argument containing an invalid `restrictTo` property, function falls back to the default, restriction-free behaviour.' );

test.todo( 'When invoked with an `options` argument containing a valid `useChars` property, function restricts the output to the characters provided.' );

test.todo( 'When invoked with an `options` argument containing an invalid `useChars` property, function falls back to the default behaviour.' );
