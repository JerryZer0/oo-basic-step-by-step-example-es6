const Person = require("./person.js")

class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    
    introduce(){
        let introduction = "I am a Worker. I have a job."
        return introduction;
    }
}

module.exports = Worker;