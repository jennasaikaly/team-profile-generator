const generateManager = teamData => {
  return `
   <p><b>Office Number:</b> ${teamData.office}</p>
      `;
};

const generateEngineer = teamData => {
  return `
  
  <p><b> Github: </b></p> 
  <a class="github" href="https://github.com/${teamData.github}">${teamData.github}</a>
 
    `;
};

const generateIntern = teamData => {
  return `
  
    <p><b>School:</b> ${teamData.school}</p>
  
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
   
      <div class="profile-container">
        <div class = "profile-header">
          <h2 class="text-dark bg-primary p-2 display-inline-block">${member.getName()}</h1>
          <h3 class="profile-role text-light">${member.getRole()}</h3>
        </div>
        <div class = "profile-body">
          <p> <b>ID:</b> ${member.getId()}</p></br>
          <p><b>Email:</b></p><a class="email" href="mailto:${member.getEmail()}"> ${member.getEmail()}</a></br>
          <div class = "member-position">${memberPosition} </div>
        </div>
      </div>
    `;
  });

  return `
  <section class="flex-row justify-space-between">
      ${employeeHtmlArr.join('')}
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
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <h1>Meet the Team</h1>
      </header>
      <main>
        ${generateEmployee(teamData)}
      </main>
      <footer>
        <h3>&copy; ${new Date().getFullYear()} by Jenna Saikaly</h3>
      </footer>
    </body>
  </html>
  `;
};