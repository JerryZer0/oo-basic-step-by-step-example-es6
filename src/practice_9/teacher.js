const Person = require("./person.js")

class Teacher extends Person{
    constructor(id, name,age,klass){
        super(id, name, age);
        this.klass = klass;
    }
    
    introduce(){
        let introduction = super.introduce();
        if(this.klass === undefined){
            introduction += " I am a Teacher. I teach No Class."
        }else{
            introduction += " I am a Teacher. I teach Class "+ this.klass.number +"."
        }
        return introduction;
    }

    introduceWith(student){
        let introduction = super.introduce();
        if(this.klass === student.klass){
            introduction += " I am a Teacher. I teach " + student.name + "."
        }else{
            introduction += " I am a Teacher. I don't teach "+ student.name +"."
        }
        return introduction;
    }
}

module.exports = Teacher;