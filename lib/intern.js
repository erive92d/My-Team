const Employee = require("./employee")

class Intern extends Employee {
    constructor(school){
        this.school = school
    }
    getSchool() {
        console.log(this.school)
    }
    getRoles() {
        return 'Intern'
    }
}