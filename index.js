class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    get getRadius() {
        return this.radius;
    }

    get getArea() {
        let s = this.radius * this.radius * Math.PI
        return s.toFixed(2);
    }
}

let cir = new circle(10,'green');
console.log('gia tri', cir);
console.log('dien tich', cir.getArea);

class Cylinder extends circle {
    constructor(height, radius, color) {
        super(radius,color);
        this.Height = height;
    }

    get getHeight() {
        return this.getHeight;
    }

    get getVolume() {
        return super.getArea * this.Height;
    }
}

let cyl = new Cylinder (15,20,'yellow')
console.log('gia tri', cyl)
console.log('the tich', cyl.getVolume)