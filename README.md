# Short Future Co. - String Scrambler

## About
Given a string as input, `stringScrambler` returns a 'scrambled' (random) of equal length.

## Installation
```
npm install --save sfco-string-scrambler
```

## Setup
Import the `stringScrambler` function into project scripts as follows:

```
var stringScrambler = require( 'sfco-string-scrambler' );
```

## Usage
`stringScrambler` requires a single argument of type `string`.

When invoked with a valid argument, `stringScrambler` will return a 'scrambled' (eg. random) string of equal length. Note that `stringScrambler` *preserves* any whitespace present within the input string.

```
stringScrambler( 'This is the input string' ); // t1vi nw u5d firx8 te309s
```
```
stringScrambler( 'This is the input string' ); // agsh 57 el1 ezxgv awu24h
```

`stringScrambler` will throw an error if invoked with a missing or invalid arguments.

```
stringScrambler();
stringScrambler( 1 );
stringScrambler( '' ); // Error: `stringScrambler` must invoked with a non-empty string as it's first argument.
```

## Documentation
Currently, `sfco-string-scrambler` *does not* include any external documentation.

For an overview of the project's evolution, please consult the `CHANGELOG`.
