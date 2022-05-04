const inquirer = require('inquirer');
const Employee = require("./staff/employee");
const Engineer = require("./staff/engineer");
const Intern = require("./staff/intern");
const Manager = require("./staff/manager");
const genhtml = require("./htmlgen/generateHTML");

const employeeArray = [];

// Manager Questions 
promptManager()

//user path
function promptContinue(){
    return inquirer.prompt([
        {
            type:"list",
            name:"job",
            choices:["Engineer", "Intern","placeholder"]
        },
     ])

.then((answers) =>{
    if (answers.job === "Engineer"){
        promptEngineer();
    } else if (answers.job === "Intern"){
        promptIntern();
    } else{
        //generate HTML by calling file and fuction
        genhtml.generateHTML(employeeArray);
        console.log ( "Your Team!")
    }
})
};

// Manager Questions 
function promptManager(){
    return inquirer.prompt([
        {
            type: "input",
            name: "managerID",
            message: " Input manger's ID."

        },
        
        {
            type: "input",
            name: "managerEmail",
            message: "Input manager's email."

        },
        {
            type: "input",
            name: "managerOffice",
            message: " Input Manager's Office Number."
        },
    ])
    .then((answers) =>{
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.mangerOffice);

        employeeArray.push(manager)
        console.log("Welcome ro the team, Manager!")
        promptContinue();
    })
};

//Engineer Questions
function promptEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            name: "engrName",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "engrID",
            message: "Input the Engineer's ID."
        },
        {
            type: "input",
            name: "engrEmail",
            message: "Input the Engineer's Email.",
        },
        {
            type: "input",
            name: "engrGit",
            message: "Input the Engineer's guthub username."
        },
    ])
    .then((answers)=>{
        const engineer = new Engineer(answers.engrName, answers.engrID, answers.engrEmail, answers.engrGit);
        employeeArray.push(engineer);
        console.log("Welcome to the team, Engineer!");
        promptContinue();

    })
}; 

// Intrern quesions
function promptIntern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: " What is the name of the Intern?"
        },
        {
            type: "input",
            name: "internID",
            message: "Input the Inturns ID."
        },
        {
            type: "input",
            name: "internEmail",
            message: " Input the Inturns Email."
        },
        {
            type: "input",
            name: "internSchool",
            message: "Input the Inturns school."
        },
    ])
    .then((answers) =>{
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        employeeArray.push(intern);
        console.log("Welcome to the team, Intern!");
        promptContinue();
    })
};

