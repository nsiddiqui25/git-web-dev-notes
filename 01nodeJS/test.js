// 'node test.js' in command line to run the following code through Node.js

// console.log('Hello world!');
// console.log(2+2);

//fs is a node-module (one of many Node comes with out of the box), short for file-system
var fs = require('fs');

// https node-module
var https = require('https');

//create index.html through automation
   //we give the writeFile() method three arguments
      //location on our computer where we want to create a new file; __dirname tells node to look within the current folder
      //what we want to live/have in that file we created
      //callback function - that will run once our writeFile() action has either succeeded or failed
fs.writeFile(__dirname + '/index.html', '<h1>HTML is great!</h1>', function(error){
   if(error) {
      return console.log('Error');
   } else {
      return console.log('Congrats!');
   }
});

//download a photo through automation
var myPhotoLocation = 'https://external-preview.redd.it/Ak4M0FYrZ3xSFVqVAjV45Gxa8tfcgjI3D1uZcaTxbyI.jpg?auto=webp&s=c4903fb62cac42521a1e3d37c4e88e65ecb5980e';
https.get(myPhotoLocation, function(response){
   response.pipe(fs.createWriteStream(__dirname + '/photo.jpg'));
});

//========================================//
/*

WHAT IS NPM? PACKAGE MANAGEMENT? WHY USE IT?
npm - a centralized place where developers share their code with the world. A grocery store, of sorts, where we can find all our ingredients to build a web-app. 
Package Managment - a package manager can automatically grab the most updated packages we'll need to use from a centralized location, instead of grabbing different tooks from different websites. we simply make a list, and our package manager grabs the most updated tools/techs we need

WHAT TYPES OF FILES/PACKAGES CAN WE FIND ON NPM?
2 Types of packages
   1) node packages - packages of code that help us do things in node
      -automation
      -build tools
      -server tasks
   2) other things - some of these, below, are JavaScript and CSS packages that we need for our webapp to run in the browser
      -jQuery
      -Lodash
      -Bootstrap
      -normalize.css

*/