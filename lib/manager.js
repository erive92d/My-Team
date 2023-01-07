const Employee = require("./employee")

class Manager extends Employee{
    constructor(name,id,email,officenum){
        super(name,id,email,)
        this.officenum = officenum
        
    }
    getRole() {
        return "Manager"
    }
    
}

module.exports = Manager