var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.age = age;
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.getName = function () {
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var age = document.getElementById('age').value;
        alert("Your name is " + fname + " " + lname + " and you are " + age + " years old...");
    };
    return Person;
}());
