// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
const gulp = require( 'gulp' );
const browserify = require( 'gulp-browserify' );
const rename = require( 'gulp-rename' );
const sass = require( 'gulp-sass' );
const PathMap = require( 'sfco-path-map' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const PATHS = new PathMap( {
	demo: './demo',
	demoSrc: '{{demo}}/src',
	demoDest: '{{demo}}/public',
	demoScriptsSrc: '{{demoSrc}}/js/**/*.js',
	demoScriptsDest: '{{demoDest}}/js',
	demoStylesSrc: '{{demoSrc}}/sass/styles.scss',
	demoStylesDest: '{{demoDest}}/css',
	modules: './node_modules'
} );

const sassOpts = {
	outputStyle: 'compressed',
	includePaths: [
		`${PATHS.modules}/bourbon/app/assets/stylesheets`,
		`${PATHS.modules}/sfco-sass-utils`,
		`${PATHS.modules}/susy/sass`
	]
};

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
gulp.task( 'default', [ 'scripts', 'styles' ], function() {

} );

gulp.task( 'scripts', function() {
	return gulp.src( PATHS.demoScriptsSrc )
		.pipe( browserify() )
		.pipe( rename(
			function( file ) {
				file.basename = 'bundle';
				return file;
			} )
		)
		.pipe( gulp.dest( PATHS.demoScriptsDest ) );
} );

gulp.task( 'styles', function() {
	gulp.src( PATHS.demoStylesSrc )
		.pipe( sass( sassOpts ) )
		.pipe( gulp.dest( PATHS.demoStylesDest ) );
} );
