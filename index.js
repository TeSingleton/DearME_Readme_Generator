// TODO: Include packages needed for this application
// write file
const fs = require("fs");
// ask the user for data //file system
const inquirer = require("inquire");
// generate the html // inquire  npm package that provides an easy way to capture user input.
const generateMd = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// an array of questions to provide into a call function for inquirer.
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a detailed description of your project",
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
    message: "Provide guidelines for contributing to this project.",
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
// this function will write the data from the inquirer questions into the readme
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Ask the User questions
// THEN I want to pass the response to generateMD so we can get the  markdown

// function call to initialize app
init();
