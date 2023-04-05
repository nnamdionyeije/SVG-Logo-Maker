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
    }
])
.then((data) => {
    let currentShape;
    let textPlace = 'x="150" y="125" font-size="60"';

    switch (data.shape) {
        case 'circle':
            currentShape = new circle(data.text, data.textColor, data.shape, data.shapeColor);
            break;
            // break;
        case 'triangle':
            currentShape = new triangle(data.text, data.textColor, data.shape, data.shapeColor);
            textPlace = 'x="150" y="125" font-size="40"'
            break;
        case 'square':
            currentShape = new square(data.text, data.textColor, data.shape, data.shapeColor);
            break;
    }

    const svgCode = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${currentShape.render()}

        <text ${textPlace} text-anchor="middle" fill="${currentShape.textColor}">${currentShape.text}</text>

        </svg>
    `

    fs.writeFile('logo.svg', svgCode, (err) =>
        err ? console.error(err) : console.log('SVG logo created')
    )

});
