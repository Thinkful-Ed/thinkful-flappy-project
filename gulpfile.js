var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

var NAME = require('./package.json').name;
var VERSION = require('./package.json').version;
var OUTPUT = NAME + '.' + VERSION;

var bundler = browserify({entries: './js/main.js'}, watchify.args);

gulp.task('clean', function(cb) {
    del(['./build'], cb);
});

gulp.task('clean:js', function(cb) {
    del(['./build/js'], cb);
});

gulp.task('clean:css', function(cb) {
    del(['./build/css'], cb);
});

gulp.task('watchify', function() {
    var watcher = watchify(bundler);
    watcher.on('update', function() {
        gulp.start('js');
    });
});

gulp.task('js', ['clean:js'], function() {
    return bundler
        .bundle()
        .on('error', function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        })
        .pipe(source(OUTPUT + '.min.js'))
        .pipe(buffer())
//        .pipe(sourcemaps.init())
        .pipe(concat(OUTPUT + '.min.js'))
//        .pipe(uglify())
//        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('css', ['clean:css'], function() {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat(OUTPUT + '.min.css'))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', ['watchify', 'js', 'css'], function() {
    gulp.watch('./css/*.css', ['css']);
});
gulp.task('default', ['js', 'css']);
