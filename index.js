const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const teamData = []


//Menu Prompts
function menuPrompt(){
    //this function returns a running of inquire.prompt(), thus returning
  // what it returns, which is a Promise
    return inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "Who Would you like to build a profile for?",
            choices: [
                "Engineer",
                "Intern",
                "I am finished"
            ]
        }
    ])
    .then(answers => {
      if (answers === "Engineer"){
        engineerPrompts();
      } else if (answers === "Intern"){
        internPrompts();
      } 
    
    })  
}
//get Manager"s info
function managerPrompts() {
  
  
    //this function returns a running of inquire.prompt(), thus returning
  // what it returns, which is a Promise
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a name.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter an ID number.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter an email address.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                  return true;
                } else {
                  console.log("Please enter an office number");
                  return false;
                }
              }
        }
    ])
    .then ((managerData) => {
      //creates new Manager object
      const newManager = new Manager(
        //these are the parameters
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.office)
      //adds newManager object to the teamData array
      teamData.push(newManager);
      //calls the menuPrompt function
      menuPrompt();
    })
}

//get Engineer's info
function engineerPrompts(){
    //this function returns a running of inquire.prompt(), thus returning
  // what it returns, which is a Promise
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Engineer?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a name.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID number?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter an ID number.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter an email address.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's github username?",
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username.");
                  return false;
                }
              }
        }
    ])
    .then (engineerData => {
      //creates new Engineer object
      const newEngineer = new Engineer(
        //these are the parameters
      engineerData.name,
      engineerData.id,
      engineerData.email,
      engineerData.office)
      //adds newEngineer object to the teamData array
      teamData.push(newEngineer);
      //calls the menuPrompt function
      menuPrompt();
    })
}
  
//get Intern's info
function internPrompts(){
    //this function returns a running of inquire.prompt(), thus returning
  // what it returns, which is a Promise
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a name.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter an ID number.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter an email address.");
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the Intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter a school name");
                  return false;
                }
              }
        }
    ])
    .then (internData => {
      //creates new Intern object
      const newIntern = new Intern(
        //these are the parameters
      internData.name,
      internData.id,
      internData.email,
      internData.office)
      //adds newIntern object to the teamData array
      teamData.push(newIntern);
      //calls the menuPrompt function
      menuPrompt();
    })
}
 



   

managerPrompts();

// {
//     inquirer
//     .prompt({
        
//     })
//     //destructure name from the prompt object
//     //using arrow key to bc of lexical scope needed for "this" to refer to object
//     .then(({ name }) =>{
//         this.employee = new Employee(name);
// //test object creation
// //console.log(this.employee);            
//     })
// }    

//  getID = function(){
//     inquirer
//     .prompt()
//     //destructure id from the prompt object
//     //using arrow key to bc of lexical scope needed for "this" to refer to object
//     .then(({ id }) =>{
//         this.employee = new Employee(id);
// //test object creation
// console.log(this.employee);            
//     })
// }

// getEmail = function(){
//     inquirer
//     .prompt()
//     //destructure id from the prompt object
//     //using arrow key to bc of lexical scope needed for "this" to refer to object
//     .then(({ email }) =>{
//         this.employee = new Employee(email);
// //test object creation
// console.log(this.employee);            
//     })
// }