#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

const fs = require('fs')
const path = require('path')
const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')
console.log(output)
const inquirer = require('inquirer')
const open = require('open')
const clear = require("clear")
const chalk = require('chalk')


const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:linuxjacob@mail.com");
          console.log("\nDone, see you soon.\n");
        }
      },
       {
        name: `Send me a ${chalk.green.bold("message on matrix")}?`,
        value: () => {
          open("https://matrix.to/#/@orangemn6:matrix.org");
          console.log("\nDone, I will write back soon!.\n");
        }
      },
       {
        name: `Send me a ${chalk.green.bold("message on discord")}?`,
        value: () => {
          open("https://discord.gg/gehCZNS");
          console.log("\nDone, I will write back soon!.\n");
       }
      },
       {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      }
    ]
  }
];


prompt(questions).then(answer => answer.action())
