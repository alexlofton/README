// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of this application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is the description of this application?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what is the installation process for this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'please select a license for your application.',
        choices: ['apache', 'mit', 'mozilla', 'isc', 'none'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what is the use for this application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'who or what sources contributed to this application',
    },
    {
        type: 'input',
        name: 'test',
        message: 'how do you test this application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
    },
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        console.log(data)
        fs.writeFileSync('test.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
