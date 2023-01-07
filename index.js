const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const managerAccount = new Manager("Deorren", 26, "erive92d@gmail.com", 8127);


//ADD MEMBERS
function choiceAdd() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Would you like to add a Team Member?",
      name: "addteam",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Invalid";
        }
      },
    })

    .then((data) => {
      if (data.addteam) {
        //if true, add team member, else do nothing
        addTeam();
      } else {
        console.log("Welcome");
      }
    });
}

const selectRole = function () {
  inquirer
    .prompt({
      type: "list",
      message: "Select Role",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    })
    .then((answer) => {
      //if manager, you should be able to add team member
      if (answer.role === "Manager") {
        inquirer.prompt({
          type: "input",
          message: "Enter your name (Case sensitive)",
          name: "manager",
          validate: (value) => {
            if (value === managerAccount.name) {
                return true
            } else {
              return "Wrong name, enter again";
            }
          }
           //CHECKS IF USER ENTER CORRECT NAME, IF NOT DENIED
        })
        .then((answers)=>{
            if(answers) {
                choiceAdd()
            }
        })
        
      } else {
        console.log("You will need a Manager Account");
        return;
      }
    });
};

const questions = [
  {
    type: "input",
    message: "Enter name:",
    name: "name",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Invalid, Try again";
      }
    },
  },
  {
    type: "input",
    message: "Enter Employee ID number:",
    name: "id",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Invalid, Try again";
      }
    },
  },
  {
    type: "input",
    message: "Enter E-mail address:",
    name: "email",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Invalid, Try again";
      }
    },
  },
  {
    type: "list",
    message: "Enter Role:",
    name: "role",
    choices: ["Engineer", "Intern"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Invalid, Try again";
      }
    },
  },
];

const addTeam = () => {
  inquirer.prompt(questions).then((answers) => {
    //SELECTS WHICH ROLE WE SHOULD MAKE
    if (answers.role === "Engineer") {
      engineerMaker(answers);
    } else if (answers.role === "Intern") {
      internMaker(answers);
    } else {
      console.log("Doesnt exist");
    }
  });
};

const engineerMaker = function (member) {
  console.log(
    `Welcome to the Team, ${member.name}. You are an ${member.role}, which means you will need to provide your gitHub account`
  );
  const gitHub = {
    type: "input",
    message: "Enter GitHub account:",
    name: "github",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Invalid, Try again";
      }
    },
  };
  inquirer.prompt(gitHub).then((answers) => {
    const newEngineer = new Engineer(
      member.name,
      member.id,
      member.email,
      answers.github
    );
    console.log(newEngineer);
  });
};

const internMaker = function (member) {
  console.log(
    `Welcome to the Team ${member.name}. Please enter your school name`
  );

  const schoolName = {
    type: "input",
    message: "Enter School Name:",
    name: "school",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Invalid, Try again";
      }
    },
  };
  inquirer.prompt(schoolName).then((school) => {
    const newIntern = new Intern(
      member.name,
      member.id,
      member.email,
      school.school
    );
    console.log(newIntern.getRoles());
  });
};

selectRole();
