const Employee = require("./employee")

class Engineer extends Employee {
    constructor(github)  {
        this.github = github
    }
    getGithub() {
        console.log(this.github)
    }
    getRole() {
        return 'Engineer'
    }
}