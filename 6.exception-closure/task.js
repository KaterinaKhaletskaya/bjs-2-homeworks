function parseCount(value){
    let count =  Number.parseFloat(value);
    if (Number.isNaN(count) === true) {
        throw new Error("Невалидное значение");
    } 
    return count;   
}

function validateCount(value){
    
    try {
        if (parseCount(value) !=NaN) {
            return parseCount(value)
        } 
    } catch (Error) {
        return Error
    }

}


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.getError("Треугольник с такими сторонами не существует");
	}
	getError(err) {
		if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
			throw new Error(err);
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}
	get area() {
		let p = 0.5 * (this.a + this.b + this.c);
		return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}

}

function getTriangle(a, b, c) {

	try {
		let getTriangle2 = new Triangle(a, b, c);
		return getTriangle2;
	} catch (error) {
		let err = {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
		return err;
	}
}

