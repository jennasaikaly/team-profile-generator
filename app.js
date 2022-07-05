const fs = require('fs');
const generatePage = require('./src/page-template.js');
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



const teamData = [];
// const teamProfileDataArgs = process.argv.slice(2);
// const [name, id, email, role, github, school, office] = teamProfileDataArgs;

// const mockData = {
//   name: 'Saikaly',
//   id: '01',
//   email: 'sakaly@gmail.com',
//   office: '7'
// }

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
    .then(response => {
      if (response.menu === "Engineer"){
        return engineerPrompts();
      } else if (response.menu === "Intern"){
        return internPrompts();
      } else {
        const pageHTML = generatePage(teamData);
        fs.writeFile('./index.html', pageHTML, err => {
            if (err) throw new Error(err);
      
            console.log('Page created! Check out index.html in this directory to see it!');
          });
        
      }
    })

  };
      
      //get Manager"s info
function managerPrompt() {
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
      managerData.office);
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
      engineerData.github)
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
            message: "What is the name of the Intern?",
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
            message: "What is the Intern's ID number?",
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
            message: "What is the Intern's email address?",
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
      internData.school)
      //adds newIntern object to the teamData array
      teamData.push(newIntern);
      //calls the menuPrompt function
      menuPrompt();
    })
}



// const writeFile = teamData => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('index.html', generatePage(teamData), err => {
//          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//          if (err) {
//           reject(err);
//           // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//           return;
//         }
  
//         // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//     });
//   };

  managerPrompt();