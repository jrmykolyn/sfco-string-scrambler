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

test( 'When invoked with an `options` argument, function does not throw an error', ( t ) => {
	var input = 'This is the input string';

	t.notThrows( () => {
		stringScrambler( input, {} );
	} );
} );

/// TODO[@jrmykolyn] - Update test to plan for 1x assertion per character set. (eg. 'alpha', 'nums', 'symbols', etc.)
test( 'When invoked with an `options` argument containing a valid `restrictTo` property, function restricts the output to the correct characters.', ( t ) => {
	var input = 'This is the input string';
	var outputLetters = stringScrambler( input, { restrictTo: 'alpha' } );
	var outputNums = stringScrambler( input, { restrictTo: 'nums' } );

	// Patterns
	var regexLettersOnly = /^[\w|\s]*$/gmi;
	var regexNumsOnly = /^[\d|\s]*$/gmi;

	t.plan( 2 );
	t.is( !!outputLetters.match( regexLettersOnly ), true );
	t.is( !!outputNums.match( regexNumsOnly ), true );
} );

test( 'When invoked with an `options` argument containing an invalid `restrictTo` property, function falls back to the default, restriction-free behaviour.', ( t ) => {
	var input = 'This is the input string';
	var output = stringScrambler( input, { restrictTo: 'notAValidOption' } );

	t.is( input.length, output.length );
} );

test( 'When invoked with an `options` argument containing a valid `useChars` property, function restricts the output to the characters provided.', ( t ) => {
	var input = 'This is the input string';
	var output = stringScrambler( input, { useChars: [ 'a', 'b', 'c' ] } );
	var p = /^[a|b|c|\s]*$/gmi;

	t.is( p.test( output ), true );
} );

test( 'When invoked with an `options` argument containing an invalid `useChars` property, function falls back to the default behaviour.', ( t ) => {
	var input = 'This is the input string';
	var outputInvalidNull = stringScrambler( input, { useChars: null } );
	var outputInvalidString = stringScrambler( input, { useChars: 'false' } );
	var outputInvalidNum = stringScrambler( input, { useChars: 0 } );
	var outputInvalidBool = stringScrambler( input, { useChars: false } );
	var outputInvalidObj = stringScrambler( input, { useChars: {} } );
	var outputInvalidUndefined = stringScrambler( input, {} );

	t.plan( 6 );
	t.is( input.length, outputInvalidNull.length );
	t.is( input.length, outputInvalidString.length );
	t.is( input.length, outputInvalidNum.length );
	t.is( input.length, outputInvalidBool.length );
	t.is( input.length, outputInvalidObj.length );
	t.is( input.length, outputInvalidUndefined.length );
} );
