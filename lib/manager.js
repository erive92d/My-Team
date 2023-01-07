const Employee = require("./employee")

class Manager extends Employee{
    constructor(officenum){
        this.officenum = officenum
    }
    getRole() {
        return "Manager"
    }
}