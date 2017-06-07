( function() {
	// --------------------------------------------------
	// DECLARE VARS
	// --------------------------------------------------
	var stringScrambler = require( '../../../index' );
	var btns = document.querySelectorAll( 'button' );

	// --------------------------------------------------
	// REGISTER EVENT LISTENERS
	// --------------------------------------------------
	btns.forEach( function( button ) {
		button.addEventListener( 'click', function() {
			var parent = this.parentElement;
			var target = parent.querySelector( '.target' );
			var text = target.innerHTML;
			var opts = getOptions( parent );

			/// TODO[@jrmykolyn] - Pass `opts` into `stringScrambler` call... when possible.

			target.innerHTML = stringScrambler( text );
		} );
	} );

	// --------------------------------------------------
	// DECLARE FUNCTIONS
	// --------------------------------------------------
	function getOptions( node ) {
		if ( !node || !node.getAttribute( 'data-options' ) ) {
			return null;
		} else {
			return node.getAttribute( 'data-options' )
				.split( ';' )
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
} )();
