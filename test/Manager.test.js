const Manager = require("../lib/Manager");

test('Can create office number via constructor', () => {
    const officeNumber = 5;
    const testManager = new Manager('JohnDoe', 3, 'johndoethegreatest@gmail.com', officeNumber);
    expect(testManager.officeNumber).toBe(officeNumber);
});

test('getRole() should return "Manager"', () => {
    const role = 'Manager';
    const testManager = new Manager('JohnDoe', 3, 'johndoethegreatest@gmail.com', 5);
    expect(testManager.getRole()).toBe(role);
});

test('Can get office number via getOffice()', () => {
    const officeNumber = 5;
    const testManager = new Manager('JohnDoe', 3, 'johndoethegreatest@gmail.com', officeNumber);
    expect(testManager.getOfficeNumber()).toBe(officeNumber);
});