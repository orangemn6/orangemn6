'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const open = require('open')


// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
//  borderStyle: 'round'
  borderStyle: 'double'
}

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
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      }
    ]
  }
];



// Text + chalk definitions
const data = {
  name: chalk.yellow('           Jacob Goldstein'),
  handle: chalk.white('orangemn6'),
  work: chalk.cyan.bold('I was born to make mistakes, not fake perfection'),
  opensource: chalk.white('  ') + chalk.green('  '),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('orangemn6'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~orangemn6'),
  github: chalk.gray('https://github.com/') + chalk.green('orangemn6'),
  reddit: chalk.magenta('/u/linuxchromebookdude'),
  web: chalk.yellow('https://jacobgoldstein.tk'),
  matrix: chalk.cyan('@orangemn6:') + chalk.green('matrix.org'),
  npx: chalk.red('npx') + ' ' + chalk.cyan('orangemn6'),
  labelWork: chalk.white.bold(''),
  labelOpenSource: chalk.white.bold('  '),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelMatrix: chalk.white.bold('     Matrix:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
  labelreddit: chalk.white.bold('     Reddit:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const matrixing = `${data.labelMatrix}  ${data.matrix}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`
const redditing = `${data.labelreddit}  ${data.reddit}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
	       matrixing + newline + // data.labelMatrix + data.matrix
	       redditing + newline + // data.labelreddit + data.reddit
               webing + newline + newline + // data.labelWeb + data.web
	       carding // data.labelCard + data.npx



//prompt(questions).then(answer => answer.action());

fs.writeFileSync(path.join(__dirname, 'bin/output'), (chalk.green(boxen(output, options))))
