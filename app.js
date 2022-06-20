const fs = require('fs');
const generatePage = require('./src/page-template.js');
const teamProfileDataArgs = process.argv.slice(2);
const [name, id, email, role, github, school, office] = teamProfileDataArgs;




  fs.writeFile('index.html', generatePage(name, id, email, role, github, school, office), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });