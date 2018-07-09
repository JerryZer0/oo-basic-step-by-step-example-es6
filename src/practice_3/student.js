const Person = require ("./person.js");

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let introduction = "I am a Student. I am at Class " + this.klass + "."
        return introduction;
    }
}

module.exports = Student;