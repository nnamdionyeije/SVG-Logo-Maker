const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const {shapes, circle, triangle, square} = require('./lib/shapes');


inquirer
  .prompt([
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
])
.then((data) => {
    let currentShape;

    switch (data.shape) {
        case 'circle':
            currentShape = new circle(data.text, data.textColor, data.shape, data.shapeColor);
            break;
            // break;
        case 'triangle':
            currentShape = new triangle(data.text, data.textColor, data.shape, data.shapeColor);
            break;
        case 'square':
            currentShape = new square(data.text, data.textColor, data.shape, data.shapeColor);
            break;
    }

    const svgCode = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${currentShape.render()}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${currentShape.textColor}">${currentShape.text}</text>

        </svg>
    `

    fs.writeFile('logo.svg', svgCode, (err) =>
        err ? console.error(err) : console.log('SVG logo created')
    )

})



// function writeToFile(fileName, svg) {
    
//   }



// function init() {
//     inquirer.prompt(questions).then((inquirerResponses) => {
//         writeToFile('logo.svg', generateShapes(inquirerResponses));
// })
// }

// init();
