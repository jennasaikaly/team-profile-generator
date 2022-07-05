

const generateManager = teamData => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      <div>
  <h1>${teamData[i].name}</h1>
  <p>Manager</p>
  <p>${teamData[i].id}</p>
  <p>${teamData[i].email}</p>
  <p>${teamData[i].office}</p>
    
        <!-- Leaving this empty as we'll dynamically insert project HTML here -->
      </div>
    </section>
  `;
};
const generateEngineer = teamData => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      <div>


    <h1>${teamData[i].name}</h1>
  <p>Engineer</p>
  <p>${teamData[i].id}</p>
  <p>${teamData[i].email}</p>
  <p>${teamData[i].github}</p>

 
        <!-- Leaving this empty as we'll dynamically insert project HTML here -->
      </div>
    </section>
  `;
};
const generateIntern = teamData => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      <div>

  <h1>${teamData[i].name}</h1>
  <p>Intern</p>
  <p>${teamData[i].id}</p>
  <p>${teamData[i].email}</p>
  <p>${teamData[i].school}</p>
  

        <!-- Leaving this empty as we'll dynamically insert project HTML here -->
      </div>
    </section>
  `;
};

const generateEmployee = teamData => {

  const employeeHtmlArr = teamData.map(({ name, role, id, email }) => {
    return `
    <section class="my-3" id="profile">
      <div class="card flex-row justify-space-between">
      <div class = "card-header">
        <h1 class="text-dark bg-primary p-2 display-inline-block">${name}</h1>
        <h3 class="profile-role text-light">${role}</h3>
      </div>
      <div class = "card-body">
        <p>${id}</p>
        <a href="mailto:${email}">Email</a>
      </div>
    </section>
    `;
  });

  return `
  <section class="my-3" id="profile">
    <div class="flex-row justify-space-between">
      ${employeeHtmlArr.join('')}
    </div>
  </section>
`;
};

module.exports = teamData => {


  // destructure projects and about data from templateData based on their property key names
  //   const { name, role, id, email, ...special } = teamData;

  // const special = {
  //    office: teamData[i].office,
  //    school: teamData[i].school,
  //    github: teamData[i].github
  // };

  //  console.log(teamData);


  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TeamProfile</title>
  </head>

  <body>
   <header>
   <div class="container flex-row justify-space-between align-center py-3">
     <h1 class="page-title text-secondary bg-dark py-2 px-3">Meet the Team</h1>
     <nav class="flex-row">
       
     </nav>
   </div>
   </header>
   <main class="container my-5">

   ${generateEmployee(teamData)}
  
 
   </main>
   <footer class="container text-center py-3">
   <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Jenna Saikaly</h3>
   </footer>
 
   
  </body>
  </html>
  `;
};
//  <h1>${teamData.name}</h1>
  //   <h2><a href="https://github.com/${teamData.github}">Github</a></h2>