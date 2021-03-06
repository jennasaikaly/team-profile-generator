const fs = require('fs');
const generatePage = require('./src/page-template.js');
const inquirer = require("inquirer");
// const { writeFile, copyFile, writeFileResponse } = require('./utils/generate-site.js');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



const teamData = [];

//Menu Prompts
function menuPrompt(){
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
        // generatePage(teamData)
        
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw new Error(err);
          console.log('Page created! Check out index.html in this directory to see it!');
          });
        fs.copyFile('./src/style.css', './dist/style.css',err => {
          if (err) throw new Error(err);
        console.log('Style sheet copied successfully!');
        })
  };
});
}
      
      //get Manager"s info
function managerPrompt() {
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

  managerPrompt()
  