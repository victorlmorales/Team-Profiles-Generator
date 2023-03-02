const Intern = require('../lib/Intern');

test('Can create school via constructor', () => {
    const school = 'Any School';
    const testIntern = new Intern('JohnDoe', 3, 'johndoethegreatest@gmail.com', school);
    expect(testIntern.school).toBe(school);
});

test('getRole() should return "Intern"', () => {
    const role = 'Intern';
    const testIntern = new Intern('JohnDoe', 3, 'johndoethegreatest@gmail.com', 'UCLA');
    expect(testIntern.getRole()).toBe(role);
});

test('Can get school via getSchool()', () => {
    const school = 'Any School';
    const testIntern = new Intern('JohnDoe', 3, 'johndoethegreatest@gmail.com', school);
    expect(testIntern.getSchool()).toBe(school);
});
