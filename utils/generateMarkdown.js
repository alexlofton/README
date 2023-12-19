// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "apache"){
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  else if(license === "mit"){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  else if(license === "mozilla"){
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
  else if(license === "isc"){
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
  else if(license === "none"){
    return ` `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "apache"){
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license === "mit"){
    return `(https://opensource.org/licenses/MIT)`
  }
  else if(license === "mozilla"){
    return `(https://opensource.org/licenses/MPL-2.0)`
  }
  else if(license === "isc"){
    return `(https://opensource.org/licenses/MPL-2.0)`
  }
  else if(license === "none"){
    return ` `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Test](#test)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is licensed under ${data.license}
<br>
License link: ${renderLicenseLink(data.license)}

## Contributing 


## Test
${data.test}

## Questions
Check out my work at http://github.com/${data.github}
<br>
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
