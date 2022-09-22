// If there is no license, return empty string

// apache License 2.0
// GNU General Public License v3.0
// MIT  License
// BSD 2-clause "Simplified" License
// BSD 3-clause "New" or "Revised" License

let licenseButton = "";
// license button section
function renderLicenseSection(data) {
  if (data.licensing === "Apache 2.0") {
    licenseButton =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)]";
  } else if (data.licensing === "GNU GPL V3") {
    licenseButton =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (data.licensing === "MIT") {
    licenseButton =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]";
  } else if (data.licensing === "BSD 3-clause License") {
    licenseButton =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-brightgreen.svg)]";
  } else if (data.licensing === "No License") {
    return "";
  }
}
{
}

// license link section
function licenseURL() {
  if (condition) {
  } else {
  }
}

//  license info section
let licenseInfo = "";

function showLicenseInfo() {}

// function renderTitle(title) {
//   return `# ${data.title}`;

//   // data.title
//   // data.description
//   // data.authorName

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ##Description

    ${data.dedescription}

    ## Table of Contents
     
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions?](#questions)
    
    ## Installation 
    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    ${renderLicenseSection(data)}

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ##Questions?

    Any inquiries , feel free to reach out

    GitHub : <a href="https://github.com/${data.username}">${data.username}</a>

    Email:  <a href="mailto:${data.email}">${data.email}</a>

    `;
}

module.exports = generateMarkdown;
//     `# <Your-Project-Title>

//     ## Description

//     ${}

//     ## Table of Contents (Optional)

//     If your README is long, add a table of contents to make it easy for users to find what they need.

//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [Credits](#credits)
//     - [License](#license)

//     ## Installation

//     ${}

//     ## Usage

//     ${}

//     ## Credits

//  ${}

//     ## License

//    ${}

//     ## Features

//     ${}

//     ## How to Contribute

//    ${}
//     ## Tests

//     ${}
//   }
// }

// export markdown
