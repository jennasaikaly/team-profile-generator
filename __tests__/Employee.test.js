const Employee = require('../lib/Employee');
jest.mock('../lib/Employee.js');
//test('creates an Employee object', () => {
  //  const employee = new Employee('Jenna');

    //expect(employee.name).toBe('Jenna');
    //expect(employee.id).toEqual(expect.any(Number));
   // expect(employee.email).toEqual(expect.any(Object));
    //});

    test ('gets employee name', () => {
        const employee = new Employee('');

    expect(employee.name).toEqual(expect.any(String));
    })

    test ('gets employee ID number', () => {
        const employee = new Employee('');

    expect(employee.id).toEqual(expect.any(String));
    })

    test ('gets employee email address', () => {
        const employee = new Employee('');

    expect(employee.id).toEqual(expect.any(String));
    })