#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: chalk.bgBlack.whiteBright("Enter student name here: "),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Plese write a correct name";
        }
    }
]);
console.log(chalk.red.bold(`\n Hello! "${answer.student}", Welcome to our "Student-Management-System" \n`));
console.log(chalk.red.bold(`Your Student ID is: ${randomNumber} \n`));
let course1 = await inquirer.prompt([
    {
        name: "course2",
        type: "list",
        message: chalk.bgBlack.whiteBright("Select Your Desirable Course You Want to Enroll: "),
        choices: ['MS-OFFICE', 'HTML-5', 'CSS-3', 'JAVASCRIPT', 'TYPESCRIPT', 'NODE.JS', 'REACT.JS']
    }
]);
const courseFee = {
    "MS-OFFICE": 2000,
    "HTML-5": 2500,
    "CSS-3": 3000,
    "JAVASCRIPT": 4000,
    "TYPESCRIPT": 5000,
    "NODE.JS": 6000,
    "REACT.JS": 10000
};
console.log(`\n Course Fees: ${courseFee[course1.course2]}/- \n`);
console.log(`\n Balance: ${myBalance} \n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: 'list',
        message: chalk.bgBlack.whiteBright("\n Select Your Payment Method: \n"),
        choices: ['Bank Transfer', 'Easypaisa', 'JazzCash', 'COD']
    },
    {
        name: "amount",
        type: "input",
        message: chalk.bgBlack.whiteBright("\n How much money do you want to transfer: \n"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Plese write a correct amount";
        }
    }
]);
console.log(`\n You Select "${paymentType.payment}" as a "Payment Method" \n `);
const courseFees = courseFee[course1.course2];
const paymentAmount = parseFloat(paymentType.amount);
if (courseFees === paymentAmount) {
    console.log(`\nCongratulations, You are Succesfully Enrolled in ${course1.course2} \n`);
    let ans = await inquirer.prompt([
        {
            name: "status",
            type: "list",
            message: chalk.bgBlack.whiteBright("What do you want to next: "),
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.status === "View Status") {
        console.log(`\n***** STATUS ***** \n`);
        console.log(`Student Name: ${answer.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Selected Course: ${course1.course2}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log(`\n You Selecting "Exit", "GOOD-BYE" See You Later! \n`);
    }
}
else {
    console.log("\n Invalid Attempt, You select wrong amount, 'Please Try Again'");
}
