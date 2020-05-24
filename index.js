const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe this project?",
        name: "description",
    },
    {
        type: "input",
        message: "How would someone install this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do you use this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Which licenses does this project have?",
        name: "license"
    },
    {
        type: "input",
        message: "How can someone contribute to this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What tests have you conducted with this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github email?",
        name: "email"
    },
    {
        type: "input",
        message: "How would you label your badge?",
        name: "label"
    },
    {
        type: "input",
        message: "What word do you want in your badge?",
        name: "message"
    },
    {
        type: "list",
        message: "Which color is your favorite?",
        name: "color",
        choices: [
            "brightgreen",
            "green",
            "yellowgreen",
            "yellow",
            "orange",
            "red",
            "blue",
            "lightgrey",
            "success",
            "important",
            "critical",
            "informational",
            "inactive",
            "blueviolet",
            "ff9b4",
            "9cf"
        ]
    },
    {
        type: "input",
        message: "Who should take the credit for this project?",
        name: "credits"
    },
];

function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data);
        let filename = data.title.toLowerCase().split(" ").join("") + ".md";
        let markdown = generateMarkdown(data);
        fs.writeFile(filename, markdown, function (error) {
            if (error) {
                return console.log(error)
            }
            console.log("Success");
        })
    });

}

init();
