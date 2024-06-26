// Exercise 3: Functions //

// 1. Write a function that takes two numbers as parameters and returns their sum //

function sumNum (numOne: number, numTwo: number): number {
    return numOne + numTwo;
}

let results = sumNum(5,3);
console.log(results);

// 2. Write a function that returns a fixed number //

function fixedNum(): number {
    return 10;
}

let results2 = fixedNum();
console.log(results2);

/* 3. Write a function that takes a string and an optional boolean parameter. If the boolean
is true, return the string in uppercase; otherwise, return it in lowercase. */

function theString(input: string, toUpper?: boolean): string {

    if (toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}

let results3 = theString("Hello, world!", true);
console.log(results3);

let results4 = theString("Hello, world", false);
console.log(results4);

let results5 = theString("Hello, world");
console.log(results5);