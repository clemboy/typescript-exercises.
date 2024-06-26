// Excise 5 : Basic calculator //

class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }

    multiply(x: number, y: number): number {
        return x * y;
    }

    divide(x: number, y: number): number | string {
        if (y === 0) {
            return "Error: Division by zero";
        } else {
            return x / y;
        }
    }

    
    private isValidNumber(num: any): boolean {
        if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
            return false;
        }
        return true;
    }

    
    calculate(operator: string, x: number, y: number): number | string {
        if (!this.isValidNumber(x) || !this.isValidNumber(y)) {
            return "Error: Invalid input. Please provide valid numbers.";
        }

        switch (operator) {
            case '+':
                return this.add(x, y);
            case '-':
                return this.subtract(x, y);
            case '*':
                return this.multiply(x, y);
            case '/':
                return this.divide(x, y);
            default:
                return "Error: Unsupported operation.";
        }
    }
}


const calculator = new Calculator();


console.log(calculator.calculate('+', 10, 5)); 


console.log(calculator.calculate('-', 10, 5)); 


console.log(calculator.calculate('*', 10, 5)); 


console.log(calculator.calculate('/', 10, 5)); 


console.log(calculator.calculate('/', 10, 0)); 
 