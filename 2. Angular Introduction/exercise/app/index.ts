class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `Hello, I am ${this.name}`;
    }
}

let user = new User('Petar');
console.log(user.sayHello());