const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        validate: function (input) {
            if (input.length > 3) {
                console.log("\n (input is too long)")
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color',
        // validate: function (input) {
        //     //check for valid shape name or hex input
        // }
        //Validation isn't necessary, I can handle erroneous color input in the constructor.
    },
    {
        type: 'list',
        name: 'shape',
        message: "Select a shape for the logo",
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color',
        // validate: function (input) {
        //     //check for valid shape name or hex input
        // }
    }
]

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Creating Logo');

})
}

init();
