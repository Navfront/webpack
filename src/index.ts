import { calc } from "./calc";


class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    sayHi() {
        console.log(this.name)
    }
}

new Person('Andrey').sayHi()
console.log(calc(2,3));
