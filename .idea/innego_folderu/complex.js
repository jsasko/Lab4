var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.plus = function (var_b) {
        var var_a = this;
        var real = var_a.real + var_b.real;
        var imaginary = var_a.imaginary + var_b.imaginary;
        return new Complex(real, imaginary);
    };
    Complex.prototype.minus = function (var_b) {
        var var_a = this;
        var real = var_a.real - var_b.real;
        var imaginary = var_a.imaginary - var_b.imaginary;
        return new Complex(real, imaginary);
    };
    Complex.prototype.module_number = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.show_number = function () {
        var view = "";
        if (this.imaginary > 0) {
            view = this.real + "+" + this.imaginary + "i";
        }
        else if (this.imaginary < 0) {
            view = this.real + (this.imaginary + "i");
        }
        else {
            view = this.real + "";
        }
        return view;
    };
    return Complex;
}());
var first_number = new Complex(5, -3);
var second_number = new Complex(2, -5);
console.log("fn: " + first_number.show_number());
console.log("sn: " + second_number.show_number());
console.log("|fn|: " + first_number.module_number());
console.log("|sn|: " + second_number.module_number());
console.log("fn+sn: " + first_number.plus(second_number).show_number());
console.log("fn-sn: " + first_number.minus(second_number).show_number());
