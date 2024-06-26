// Exercise 2: Type Aliases //

// 1. Create a type alias for a union type that can be either a string or a boolean. //

type strOrBool = string | boolean;

let aliasVariable: strOrBool;

aliasVariable = "Hello, world!";
aliasVariable = false;