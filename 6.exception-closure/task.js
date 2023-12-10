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


class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b < c) || (a + c < b) || (b + c < a)){
            throw new Error("Треугольник c такими сторонами не существует");
        }
    }
    get perimeter (){
        return a + b + c;
    }
    get area (){
        let p = 0.5 * (a+b+c);
        return (Math.sqrt(p((p-a)*(p-b)*(p-c)))).toFixed(3);
    }
}