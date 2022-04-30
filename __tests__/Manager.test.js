const Manager = require('../lib/Manager');
jest.mock('../lib/Manager.js');

test('gets office number', () => {
    const manager = new Manager('');
    expect(manager.office).toEqual(expect.any(String));
    })

test('gets role', () => {
    const manager = new Manager('');
    expect(manager.role).toBe('Manager');
    })  