( function() {
	// --------------------------------------------------
	// DECLARE VARS
	// --------------------------------------------------
	var stringScrambler = require( '../../../index' );

	// Elems.
	var demo = document.getElementById( 'demo' );

	// Examples
	var examples = [
		{
			description: 'Default example.',
			text: 'Input Text'
		}
	];

	// --------------------------------------------------
	// DECLARE FUNCTIONS
	// --------------------------------------------------
	function init( examples ) {
		examples.forEach( function( example ) {
			var html = buildExampleElems( example );

			demo.appendChild( html );
		} );

		addEventListeners();
	}

	function buildExampleElems( data ) {
		var wrapper = document.createElement( 'article' );
		wrapper.classList.add( 'example' );

		if ( data.options ) {
			var optionsStr = Object.keys( data.options )
				.map( ( key ) => {
					return [ key, data.options[ key ] ];
				} )
				.reduce( ( a, b ) => {
					a += `${b[0]}:${b[1]};`;

					return a;
				}, '' );

			wrapper.setAttribute( 'data-options', optionsStr );
		}

		var description = document.createElement( 'p' );
		description.innerHTML = data.description || '/// TEMP - FALLBACK';

		var targetWrap = document.createElement( 'div' );
		targetWrap.classList.add( 'target-wrap' );

		var target = document.createElement( 'h1' );
		target.classList.add( 'target' );
		target.innerHTML = data.text || '/// TEMP - FALLBACK';

		var btn = document.createElement( 'button' );
		btn.innerHTML = 'Scramble';

		targetWrap.appendChild( target );
		wrapper.appendChild( description );
		wrapper.appendChild( targetWrap );
		wrapper.appendChild( btn );

		return wrapper;
	}

	function getOptions( node ) {
		if ( !node || !node.getAttribute( 'data-options' ) ) {
			return null;
		} else {

			return node.getAttribute( 'data-options' )
				.split( ';' )
				.reduce( ( a, b ) => {
					return ( !!b ) ? a.concat( b ) : a;
				}, [] )
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

	function addEventListeners() {
		var btns = document.querySelectorAll( 'button' );

		btns.forEach( function( button ) {
			button.addEventListener( 'click', function() {
				var parent = this.parentElement;
				var target = parent.querySelector( '.target' );
				var input = target.innerHTML;
				var options = getOptions( parent ) || {};
				var output = stringScrambler( input, options );

				target.innerHTML = output;
			} );
		} );
	}

	// --------------------------------------------------
	// INIT
	// --------------------------------------------------
	init( examples );
} )();
