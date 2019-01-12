/*
GULP

WHAT IS GULP? 
   - A build system. A build tool. A task runner.
   - Meaning, gulp makes it easy for us to automate development tasks. It's at the heart of all automation that we set up
   - By itself, Gulp doesn't actually do anything
   - It's super lightweight, efficient, and runs incredibly quickly on our computers
   - Think of Gulp as a record player, and without a record it doesn't serve its purpose or do anything; therefore, Gulp plugins are the records and there are thousands of gulp plugins that we can choose from to automate almost any task we can think of
   - Gulp is super simple

INSTALLING GULP
   1) Install Gulp globally
      - to install something globally, means to install something on your computers so it can be used any other time for any other project. A tool is installed on our machines, ready to be used whenever we want
      - to install Gulp globally from command-line
         [npm install gulp-cli --global]
         -since this time we used the global flag, Node installed the gulp package files into a more universal or 'global' place on our computer's hard-drive.
      -we can point our cmd to any folder and we'll always have global access to gulp commands
      -[gulp -v] should spit out our gulp-cli version, if installed correctly
   2) Install Gulp in our projects
      - to install gulp to our project, point to the project folder
         [npm install gulp --save-dev]
         -in our package.json file, we'll notice a new area called devDependencies
         -as opposed to just [--save] where they get added to dependencies
            -these are packages that our webapp needs to actually run in the browser
*/

// this is a JavaScript file that tells Gulp what to do.  Gulp expects us to create this file in the root directory

// first thing we do is require the Gulp package we just installed
var      gulp = require('gulp'),
         watch = require('gulp-watch');

gulp.task('default', function(){
   // Gulp contains a method called task() which creates new tasks. It has two arguments we can pass
      // first, what we want the task to be named
      // second, what we want to happen when the task runs (as a callback)
   console.log('Hooray! You just created a gulp task');
});

gulp.task('html', function(){
   console.log("Imagine something useful being done to HTML code here.");
});

gulp.task('styles', function(){
   console.log("Imagine Sass or PostCSS tasks running here.");
});

// gulp-watch is a plugin that makes automation possible. It can watch specific files on our computer and when it detects we saved changes to a file, it can trigger a gulp task, in response
   // [npm install gulp-watch --save-dev]
gulp.task('watch', function(){
   watch('./app/index.html', function() {
   //the first argument is the file on our computer that we want to watch for saved changes to
   //second argument is a callback where we tell it what we want it to do
      gulp.start('html');
   });
      //this will run silently in the background, waiting for us to make some saved changes. It won't end until we tell it to end, usually with a control-C

   watch('./app/assets/styles/**/*.css', function() {
      gulp.start('styles');
   });
});