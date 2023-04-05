const {circle, triangle, square} = require('./shapes');

describe('Triangle',()=>{
    test('render() method should return an SVG with correct color', () => {
        const shape = new triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })

})

describe('Circle',()=>{
    test('render() method should return a circle with the correct color', () => {
        const shape = new circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    })
})

describe('Square',()=>{
    test('render() method should return a square with the correct color', () => {
        const shape = new square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="200" x="50" fill="blue" />');
    })
})