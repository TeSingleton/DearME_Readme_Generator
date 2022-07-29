// TODO: Include packages needed for this application

// write file
const fs = require("fs");

// ask the user for data
const inquirer = require("inquire");
// generate the html
const generateMd = require("./utils");

// (./utilities folder from office hours example)

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a detailed descripition of your project",
    name: "description",
  },
  {
    type: "input",
    message:
      "Provide a step by step instructions for the installation of your project",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide Usage info for this project",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide guidelines for contribnuting to this project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please provide testing guidelines for this project",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter your Github username",
    name: "username",
    // Add to questions section of ReadME
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "Which license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL 3.0",
      "BSD 3",
      "None (Don't print a badge)",
    ],
    name: "licensing",
    // this is the license section of the readme
  },
  // {
  //     type: "list",
  //     message: "Hello?",
  //     name: "test",
  // },
  // {
  //     type: "input",
  //     message: "Hello?",
  //     name: "test",
  // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // Ask the User questions
  // THEN I want to pass the response to generateMD so we can get the  markdown
}

// function call to initialize app
init();
