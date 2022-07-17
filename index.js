// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log ('Please enter the title of your project');
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log ('Please enter your name');
            }
        }
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation behind the creation of this project? (required)',
        validate: motivationInput => {
            if (motivationInput) {
                return true;
            }
            else {
                console.log ('Please describe the motivation behind your project');
            }
        }
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Why did you build this project? (required)',
        validate: purposeInput => {
            if (purposeInput) {
                return true;
            }
            else {
                console.log ('Please enter your purpose');
            }
        }
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does this project solve? (required)',
        validate: problemInput => {
            if (problemInput) {
                return true;
            }
            else {
                console.log ('Please describe the problem that is being solved');
            }
        }
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn from this projects completion? (required)',
        validate: learnInput => {
            if (learnInput) {
                return true;
            }
            else {
                console.log ('Please explain what you have learned');
            }
        }
    },
    {
        type: 'input',
        name: 'standout',
        message: 'What makes your project stand out? (required)',
        validate: standoutInput => {
            if (standoutInput) {
                return true;
            }
            else {
                console.log ('Please describe what makes your project standout');
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err=> 
        {
            if (err) {
                return console.log(err);
            }
            console.log("Congratulations! You have successfully created a ReadMe file")
        }
        ) ;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
