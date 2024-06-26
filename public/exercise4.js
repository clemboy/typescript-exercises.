// Exercise 4: Classes //
/* 1. Create a Person class with name and age properties. Implement a method to return
the person's name. */
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    return person;
}());
var person_ = new person("Clement", 20);
console.log(person_.getName());
/* 2. Add a private property socialSecurityNumber to the Person class and a method
to get the age. */
var person_1 = /** @class */ (function () {
    function person_1(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.socialSecNum = ssn;
    }
    person_1.prototype.getAge = function () {
        return this.age;
    };
    return person_1;
}());
var person_2 = new person_1("Clement", 20, "521-4755-54412");
console.log(person_2.getAge());
