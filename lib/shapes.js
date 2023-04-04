// passs the input from one JS file (inquirer)
const inquirer = require('inquirer');


class shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error ("Not implemented")
    }

    setColor(color) {
        this.shapeColor = color;
    }
}

class circle extends shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class triangle extends shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class square extends shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`
    }
}

module.exports = {shapes, circle, triangle, square}; //triangle, square