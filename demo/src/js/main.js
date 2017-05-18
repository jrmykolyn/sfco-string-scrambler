// DECLARE VARS
var stringScrambler = require( '../../../index' );
var el = document.getElementById( 'msg' );
var msgText = el.innerHTML;

// INIT
setInterval( function() {
	el.innerHTML = stringScrambler( msgText );
}, 1500 );
