const Intern = require('../lib/Intern');
jest.mock('../lib/Intern.js');

test('gets school name', () => {
    const intern = new Intern('');
    expect(intern.school).toEqual(expect.any(String));
    })

test('gets role', () => {
    const intern = new Intern('');
    expect(intern.role).toBe('Intern');
    })