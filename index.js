// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage details.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Please enter license details.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter testing instructions.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
      },
  ])
.then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('./utils/README.md', readmeContent, (err) => 
    err ? console.error(err) : console.log('Success!')
    );
});
// TODO: Create a function to write README file
 const generateReadme = (answers) =>
 `# ${answers.name}
 ###### License: ${answers.license}
 ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [Usage](#usage)
 - [Questions](#questions)
 - [Tests](#tests)
  ## Desctiption
  ### ${answers.description}
  ## Installation
  ### ${answers.installation}
  ## Usage
  ### ${answers.usage}
 
  ## Contribution
  ### ${answers.contribution}
  ## Tests
  ### ${answers.tests}
  ## Questions
  ### Please reach out to me with further quesions via my eamil: ${answers.email}
  ### [My GitHub](https://github.com/${answers.github})
  

 `

// TODO: Create a function to initialize app
function init() {inquirer}

// Function call to initialize app
init();
