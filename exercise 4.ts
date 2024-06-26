// Exercise 4: Classes // 

/* 1. Create a Person class with name and age properties. Implement a method to return
the person's name. */

class person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}

let person_ = new person("Clement", 20);
console.log(person_.getName());

/* 2. Add a private property socialSecurityNumber to the Person class and a method
to get the age. */

class person_1 {
    name: string;
    age: number;
    private socialSecNum: string;

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.socialSecNum = ssn;
    }

    getAge(): number {
        return this.age;
    }
}

let person_2 = new person_1("Clement", 20, "521-4755-54412");
console.log(person_2.getAge()); 
