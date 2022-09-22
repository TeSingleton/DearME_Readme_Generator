// TODO: Include packages needed for this application
// write file
const fs = require("fs");
// ask the user for data //file system
const inquirer = require("inquirer");

const questions = require("./utils/questions")
// generate the html // inquire  npm package that provides an easy way to capture user input.
const generateMd = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
// an array of questions to provide into a call function for inquirer.


// TODO: Create a function to write README file
// this function will write the data from the inquirer questions into the readme
// function writeToFile(fileName, data) {}
inquirer
    .prompt(questions)

    .then((answers) =>
    {
        fs.writeFile('DearMe.md', generateMd(answers),
        (err) =>
        err ? console.error(err) : console.log('Success! Your "MARKDOWN.md" file is located in your files'))
    })
      
 
// TODO: Create a function to initialize app
function init() {}

// Ask the User questions
// THEN I want to pass the response to generateMD so we can get the  markdown

// function call to initialize app
init();
