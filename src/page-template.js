
const generatePage = (name, id, email, role, github, school, office) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h1>${id}</h1>
    <h1>${email}</h1>
    <h1>${role}</h1>
    <h1><a href="https://github.com/${github}">Github</a></h1>
    <h1>${school}</h1>
    <h1>${office}</h1>
   
  </body>
  </html>
  `;
};


  //MOSTLY COPIED CODE FROM MODULE (not currently in use)
  // const generatePage = (templateData) => {
  //   console.log(templateData);
  //    return `
  //    <!DOCTYPE html> 
  //    <html lang="en"> 
  //    <head>
  //      <meta charset="UTF-8">
  //      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //      <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //      <title>Team Profile</title>
  //    </head>
   
  //    <body>
  //  <header>
  //  <div class="container flex-row justify-space-between align-center py-3">
  //    <h1 class="page-title text-secondary bg-dark py-2 px-3">Meet the Team</h1>
  //    <nav class="flex-row">
       
  //    </nav>
  //  </div>
  //  </header>
  //  <main class="container my-5">
   
   
  //  </main>
  //  <footer class="container text-center py-3">
  //  <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Jenna Saikaly</h3>
  //  </footer>
  //  </body>
  //    </html>
  //    `;
  //  };

  module.exports = generatePage;