class Klass{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number;
    }

    assignLeader(student){
        if(this.appendMember(student) )
            this.leader = student;
        else
            console.log("It is not one of us.")
    }

    equal(klass){
        return this.number === klass.number;
    }

    appendMember(student){
        return this.equal(student.klass);
    }
}

module.exports = Klass;