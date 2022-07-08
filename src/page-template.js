const generateManager = teamData => {
  return `
   <p>${teamData.office}</p>
      `;
};

const generateEngineer = teamData => {
  return `
    <h2><a href="https://github.com/${teamData.github}">Github</a></h2>
  `;
};

const generateIntern = teamData => {
  return `
    <p>${teamData.school}</p>
  `;
};

const generateEmployee = teamData => {

  const employeeHtmlArr = teamData.map((member) => {
    var memberPosition;
    if (member.getRole() === "Manager"){
      memberPosition = generateManager(member);
    } else if (member.getRole() === "Engineer"){
      memberPosition = generateEngineer(member);
    } else {
      memberPosition = generateIntern(member);
    }
    
    return `
    <section class="my-3" id="profile">
      <div class="card flex-row justify-space-between">
      <div class = "card-header">
        <h1 class="text-dark bg-primary p-2 display-inline-block">${member.getName()}</h1>
        <h3 class="profile-role text-light">${member.getRole()}</h3>
      </div>
      <div class = "card-body">
        <p>${member.getId()}</p>
        <a href="mailto:${member.getEmail()}">Email</a>
        ${memberPosition}
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