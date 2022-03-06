var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "Hello, I am ".concat(this.name);
    };
    return User;
}());
var user = new User('Petar');
console.log(user.sayHello());
//# sourceMappingURL=index.js.map