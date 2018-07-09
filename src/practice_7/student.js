const Person = require ("./person.js");

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let introduction = super.introduce();
        introduction += " I am a Student. I am at Class " + this.klass.number + "."
        return introduction;
    }
}

module.exports = Student;