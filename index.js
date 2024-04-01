#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("Welcome to my ATM Application!!!"));
console.log(chalk.bold.green("Your current balance is : 30000"));
let myBalance = 30000; // Dollar
let myPin = 2255;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter four digit pin code : ",
    },
]);
if (pinAns.pin === myPin) {
    console.log(chalk.bold.greenBright("Congratulation!! You have to reached another step"));
    let operationsAns = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "Select one of the opeartor do you want",
            choices: ["withdraw", "Fast Cash", "Check Balance", "Exit"],
        },
    ]);
    if (operationsAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your ammount : ",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.bold.red("Insufficient Balance!!"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.bold.magentaBright("Your remaining balance is : " + myBalance));
        }
    }
    else if (operationsAns.operations === "Fast Cash") {
        let FastCashAns = await inquirer.prompt([
            {
                name: "FastCash",
                type: "list",
                message: "Enter your Fast Cash",
                choices: ["1000", "2000", "5000", "15000", "20000", "30000"],
            },
        ]);
        myBalance -= FastCashAns.FastCash;
        console.log(chalk.bold.magentaBright("Your remaining amount is : " + myBalance));
    }
    else if (operationsAns.operations === "Check Balance") {
        console.log(chalk.bold.magentaBright(`Your Total Balnce is : ${myBalance}`));
    }
    else if (operationsAns.operations === "Exit") {
        console.log(chalk.bold.magentaBright("Well Done!! I hope You really enjoy ...Wish you Good Luck..."));
    }
}
else {
    console.log(chalk.bold.red("Sorry!! Invalid pin"));
}
