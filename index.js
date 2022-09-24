// TODO: Include packages needed for this application
// write file
const fs = require("fs");

// ask the user for data //file system
const inquirer = require("inquirer");

const questions = require("./utils/questions");
// generate the html // inquire  npm package that provides an easy way to capture user input.
const generateMd = require("./utils/generateMarkdown");
// const generateMarkdown = require("./remove_when_done/generateMarkdown");

// TODO: Create a function to write README file
// this function will write the data from the inquirer questions into the readme
// function writeToFile(fileName, data) {}
inquirer
  .prompt(questions)

  .then((answers) => {
    fs.writeFile("DearMe.md", generateMd(answers), (err) =>
      err
        ? console.error(err)
        : console.log(
            'Success! Your "MARKDOWN.md" file is located in your files'
          )
    );
  });
