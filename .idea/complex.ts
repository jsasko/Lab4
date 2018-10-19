class Complex {

    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    plus(var_b: Complex) {
        let var_a: Complex = this;
        let real = var_a.real + var_b.real;
        let imaginary = var_a.imaginary + var_b.imaginary;
        return new Complex(real,imaginary);
    }

    minus(var_b: Complex) {
        let var_a: Complex = this;
        let real = var_a.real - var_b.real;
        let imaginary = var_a.imaginary - var_b.imaginary;
        return new Complex(real,imaginary);
    }

    module_number() {
        return Math.sqrt(Math.pow(this.real,2)+Math.pow(this.imaginary,2));
    }

    show_number() {
        let view:string = ""
        if(this.imaginary > 0) {
            view = this.real + "+" + this.imaginary + "i";
        } else if(this.imaginary < 0) {
            view = this.real + (this.imaginary + "i");
        } else {
            view = this.real + "";
        }
        return view;
    }

}

let first_number = new Complex(5,-3);
let second_number = new Complex(2,-5);

console.log("fn: " + first_number.show_number());
console.log("sn: " + second_number.show_number());
console.log("|fn|: " + first_number.module_number());
console.log("|sn|: " + second_number.module_number());
console.log("fn+sn: " + first_number.plus(second_number).show_number());
console.log("fn-sn: " + first_number.minus(second_number).show_number());