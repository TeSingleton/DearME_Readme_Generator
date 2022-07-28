// todo Include Packages needed  for this application

// write file
 const fs = require("fs");

// ask the user for data
const inquirer = require("inquire")
// generate the html
const generateMd = require("./test")

// (./utilities folder from office hours example)

// todo: create an array of questions for the user input
const questions =[
    {
        type: "input",
        message: "Hello?",
        name: "test",
    }  
];

// todo: create a function to write README file
function writeToFile(fileName,data){}


// todo: create function to initialize app

function init() {
    // Ask the User questions

        // THEN I want to pass the response to generateMD so we can get the  markdown
}

// function call to initialize app
init();