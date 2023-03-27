const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for the text',
        validate: function (input) {
            if (input.length > 3) {
                console.log("input is too long")
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'shape',
        message: "please choose a shape",
        choices: ['circle', 'triangle', 'square'],
    }

]