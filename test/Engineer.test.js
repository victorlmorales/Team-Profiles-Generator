const Engineer = require("../lib/Engineer");

test('Can create GitHub account via constructor', () => {
    const github = 'BigJohnDoe';
    const testEngineer = new Engineer('JohnDoe', 3, 'johndoethegreatest@gmail.com', github);
    expect(testEngineer.github).toBe(github);
});

test('getRole() should return "Engineer"', () => {
    const role = 'Engineer';
    const testEngineer = new Engineer('JohnDoe', 3, 'johndoethegreatest@gmail.com', 'BigJohnDoe');
    expect(testEngineer.getRole()).toBe(role);
});

test('Can get GitHub username via getGithub()', () => {
    const github = 'BigJohnDoe';
    const testEngineer = new Engineer('JohnDoe', 3, 'johndoethegreatest@gmail.com', github);
    expect(testEngineer.getGithub()).toBe(github);
});