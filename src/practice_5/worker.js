const Person = require("./person.js")

class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    
    introduce(){
        let introduction = super.introduce();
        introduction += " I am a Teacher. I have a job."
        return introduction;
    }
}

module.exports = Worker;