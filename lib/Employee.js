const inquirer = require("inquirer");

class Employee {
    constructor(name = ''){
    this.name = name;
    //this.id= id;
    //this.email = email;
    }
    getName = function(){
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        })
        //destructure name from the prompt object
        //using arrow key to bc of lexical scope needed for 'this' to refer to object
        .then(({ name }) =>{
            this.employee = new Employee(name);
    //test object creation
    console.log(this.employee);            
        })
    }    

     getID = function(){
        inquirer
        .prompt({
            type: 'text',
            name: 'id',
            message: 'What is your ID number?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter your id number.');
                  return false;
                }
              }
        })
        //destructure id from the prompt object
        //using arrow key to bc of lexical scope needed for 'this' to refer to object
        .then(({ id }) =>{
            this.employee = new Employee(id);
    //test object creation
    console.log(this.employee);            
        })
    }

    getEmail = function(){
        inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email address.');
                  return false;
                }
              }
        })
        //destructure id from the prompt object
        //using arrow key to bc of lexical scope needed for 'this' to refer to object
        .then(({ email }) =>{
            this.employee = new Employee(email);
    //test object creation
    console.log(this.employee);            
        })
    }
    

    //getRole = function(){
    //    return 'Employee';
    //}
}

module.exports = Employee;