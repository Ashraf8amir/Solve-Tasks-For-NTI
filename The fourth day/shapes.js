export class Shape {
    area() {
        throw new Error("You must implement 'area()' child class");
    }
    perimeter() {
        throw new Error("You must implement 'perimeter()' child class");
    }

    toString() {
        return `Area: ${this.area().toFixed(2)} cm²\nPerimeter: ${this.perimeter().toFixed(2)} cm`;
    }
}

export class Rectangle extends Shape {
    constructor(width, height) {
        super();
        if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) 
            throw new Error("You must enter vaild Width or Height");

        this.width = width;
        this.height = height;
    }

    area() {
      return this.width * this.height;
    }

    perimeter() {
      return 2 * (this.width + this.height);
    }

    toString() {
      return `---------------Rectangle-------------------\n${super.toString()}`;
    }
}

export class Square extends Shape {
    constructor(side) {
        super();
        if (isNaN(side) || side <= 0) throw new Error("You must enter vaild Side");
        this.side = side;
    }

    area() {
      return this.side * this.side;
    }

    perimeter() {
      return 4 * this.side;
    }

    toString() {
      return `---------------Square-------------------\n${super.toString()}`;
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super();
        if (isNaN(radius) || radius <= 0) throw new Error("You must enter vaild Radius");
        this.radius = radius;
    }

    area() {
      return Math.PI * this.radius * this.radius;
    }

    perimeter() {
      return 2 * Math.PI * this.radius;
    }

    toString() {
      return `---------------Circle-------------------\n${super.toString()}`;
    }
}
