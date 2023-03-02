const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateTeam = require('./src/generateTeam.js');

const teamMembers = [];

console.log(
    'Build Your Team!'
);

function startApp(){
    function createTeam () {
        inquirer.prompt([{
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: ["Engineer", "Intern", "No more team members are needed."]
        }]).then(function (userInput) {
          switch(userInput.addEmployeePrompt) { 
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
    
            default:
              buildTeam();
            }
        })
    }

    function addManager() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
          }
      
        ]).then(answers => {
          const manager = new Manager(
            answers.managerName, 
            answers.managerId, 
            answers.managerEmail, 
            answers.managerOfficeNumber);
          teamMembers.push(manager);
          createTeam();
        });
      
    }

    function addEngineer() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
          },
    
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?" 
          },
    
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
          },
    
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
          }
    
        ]).then(answers => {
          const engineer = new Engineer(
            answers.engineerName, 
            answers.engineerId, 
            answers.engineerEmail, 
            answers.engineerGithub);
          teamMembers.push(engineer);
          createTeam();
        });
    
    }

    function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
          },
    
          {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
          }
    
        ]).then(answers => {
          const intern = new Intern(
            answers.internName, 
            answers.internId, 
            answers.internEmail, 
            answers.internSchool);
          teamMembers.push(intern);
          createTeam();
        });
    
    }

    function buildTeam(){
        console.log("Your team has been built!");
        fs.writeFileSync(outputPath, generateTeam(teamMembers), "UTF-8")
    }

    addManager();
}

startApp();
  
