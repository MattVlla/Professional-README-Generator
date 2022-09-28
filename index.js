// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('project Title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a short description?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('short description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('steps to install');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('instructions on app');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('contribute');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide test examples',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('testing');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'What kind of license do you want?',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('type of license');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username!',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();