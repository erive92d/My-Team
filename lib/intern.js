const Employee = require("./employee")

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email,)
        this.school = school
    }
    getSchool() {
        console.log(this.school)
    }
    getRoles() {
        return 'Intern'
    }
}

module.exports = Intern