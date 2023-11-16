

class Person {
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(this.name)
    }
}

new Person('Andrey').sayHi()