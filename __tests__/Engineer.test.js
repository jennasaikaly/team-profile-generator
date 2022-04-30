
const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer.js');

test('gets GitHub account name', () => {
    const engineer = new Engineer('');
    expect(engineer.github).toEqual(expect.any(String));
    })

test('gets role', () => {
    const engineer = new Engineer('');
    expect(engineer.role).toBe('Engineer');
    })  