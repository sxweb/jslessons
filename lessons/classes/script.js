'use strict';

class Rectangle{
    constructor (width, height){
        this.width = width;
        this.height= height;
    }

    calculeteArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.calculeteArea());

class ColoredRectangleWithText extends Rectangle{
    constructor(width, height, text, bgColor){
        super(width, height); //we can set some fields (super(height); for example)
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const coloredSquare = new ColoredRectangleWithText(10, 10, 'some text','red');
coloredSquare.showMyProps();
console.log(coloredSquare.calculeteArea());