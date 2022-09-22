// If there is no license, return empty string

// apache License 2.0
// GNU General Public License v3.0
// MIT  License
// BSD 2-clause "Simplified" License
// BSD 3-clause "New" or "Revised" License

let licenseSection = "";

function renderLicenseSection(license) {
    if (license === "Apache 2.0") {
        
    }else if (license === "GNU GPL V3") {
        
    }else if (license === "MIT") {
        
    } else if (license === "BSD 2-clause License") {
        
    } else  if(license ==='No License'){
        return ""}
    }{
        
    };


// function renderTitle(title) {
//   return `# ${data.title}`;

//   // data.title
//   // data.description
//   // data.authorName

// }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
    # ${(data.title)}
    ${license}
    `;

  }


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