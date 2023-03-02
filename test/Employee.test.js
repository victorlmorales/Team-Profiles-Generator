const Employee = require("../lib/Employee");

test('Can create a new employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Can set name via constructor', () => {
    const name = 'JohnDoe';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Can set id via constructor', () => {
    const id = 3;
    const employee = new Employee('JohnDoe', id);
    expect(employee.id).toBe(id);
});

test('Can set email via constructor', () => {
    const email = 'johndoethegreatest@gmail.com';
    const employee = new Employee('JohnDoe', 3, email);
    expect(employee.email).toBe(email);
});

test('Can get name via getName()', () => {
    const name = 'JohnDoe';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('Can get id via getId()', () => {
    const id = 5;
    const employee = new Employee('JohnDoe', id);
    expect(employee.getId()).toBe(id);
});

test('Can get email via getEmail()', () => {
    const email = 'johndoethegreatest@gmail.com'
    const employee = new Employee('JohnDoe', 3, email);
    expect(employee.getEmail()).toBe(email);
});

test('getRole() should return "Employee"', () => {
    const role = 'Employee';
    const employee = new Employee('JohnDoe', 3, 'johndoethegreatest@gmail.com');
    expect(employee.getRole()).toBe(role);
});