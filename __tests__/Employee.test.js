const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Jenna');

    expect(employee.name).toBe('Jenna');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    });
