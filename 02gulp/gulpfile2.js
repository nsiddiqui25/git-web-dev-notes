/*
GULP AND PostCSS

WHAT IS A CSS WORKFLOW?
   - Autoprefixeer - an automation tool that let's us write CSS in a way that makes it easy, then makes it support the browser.  This is where CSS Preprocessors like Sass, Less, and Stylus come into play. They allow us to use
      - CSS Variables
      - Nested CSS
   - Tools as such let us write CSS they way we wish we could, even though more 50% of browsers don's support it, then these tools pass our code through a filter that spits out a new file, and in that new file it automatically converts our code into regular CSS that will work in all browsers
   - We will be using PostCSS, a popular new post-processon, that is the fastest to compile out of all pre/post-processors

   - Previously, we configured Gulp to watch for any saved changes to any CSS files, and when a save is detected, Gulp will automatically trigger our 'styles' task

3 IMPORTANT GULP/NODE TERMS
   - gulp.src() - the source, starting point for our CSS.  Points towards a CSS file
   - gulp.dest() - the destication, end point for where our CSS goes.  Points to the directory we want the new CSS file to be created
   - pipe()
*/

var   gulp = require('gulp'),
      watch = require('gulp-watch'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer');

gulp.task('default', function(){
   console.log('Hooray! You just created a gulp task');
});

gulp.task('html', function(){
   console.log("Imagine something useful being done to HTML code here.");
});

//previously we created this task, which logged some dummy text. Now, we'll write code that implements the neat CSS features we've learned about in this lesson.  
//This would involve taking the contents of a CSS file and manipulating/converting that code, then outputting that converted code into a brand new file.
gulp.task('styles', function(){
   // console.log("Imagine Sass or PostCSS tasks running here.");
   return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([autoprefixer]))
      .pipe(gulp.dest('./app/temp/styles/'));
         // after gulp.src() we don't end the line with a semi-color, we keep it going and chain on another action; we want to move the contexts of this file into a pipe so that we can do something. We're moving the contents of the style.css file from point A to point B. gulp.dest() only takes one argument, which is a directory on our machine wher we want the new file to created
         // we use/include 'return' because gulp.src() is an asynchronous function; also, because we want to make sure that gulp is aware when this function is complete
});

gulp.task('watch', function(){
   watch('./app/index.html', function() {
      gulp.start('html');
   });

   watch('./app/assets/styles/**/*.css', function() {
      gulp.start('styles');
   });
});