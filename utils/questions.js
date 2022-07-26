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
    name: "licensing",
    type: "list",
    message: "Which license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL v3",
      "BSD 3",
      "None (Don't print a badge)",
    ],

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

module.exports = questions;
