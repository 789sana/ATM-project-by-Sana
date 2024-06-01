#! /usr/bin/env node
console.log("By Sana Naz");
import inquirer from "inquirer";
let myBalance = 15000; //Dollar
let mypin = 1234;
console.log("Welcome To Sana's ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!!");
    let accountTypeAns = await inquirer.prompt([
        {
            name: "accountType",
            type: "list",
            message: "Please select your account type",
            choices: ["Current Account", "Saving Account", "Fixed Deposit Account"]
        }
    ]);
    console.log(accountTypeAns);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        // =,-=,+=
        else {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is " + myBalance);
    }
    if (operationAns.operation === "fast cash") {
        let selectionAns = await inquirer.prompt([
            {
                name: "selection",
                message: "please select amount",
                type: "list",
                choices: ["7000", "5000", "3000"],
            }
        ]);
        console.log(selectionAns);
    }
}
else {
    console.log("Incorrect pin number");
}
