class Klass{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number;
    }
}

module.exports = Klass;