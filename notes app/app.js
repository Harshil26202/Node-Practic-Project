// const fs = require('fs');
// const sum = require('./utils');
// // fs.writeFileSync('notes.txt','I did it!! Hurray.....');
// console.log(sum(10,20));

// // fs.appendFileSync('notes.txt','BTW, I am Harshil kaneria');

// const chalk = require('chalk');
// import chalk from 'chalk';
// import validator from 'validator';

const validator = require('validator');
const notes = require('./notes.js');
const yargs = require('yargs');
// console.log(validator.isEmail('hk.com'));

const log = console.log;

// log(validator.isURL(('hk.cm')));

// log(chalk.bgBlue("hello world"));


yargs.command({
    command:'add',
    describe:'Add note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove note',
    builder: {
        title: {
            describe: 'Enter Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'Get note',
    builder: {
        title: {
            describe: 'Enter title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'List notes',
    handler: function() {
        log('Your list...')
        notes.listNotes()
    }
})




yargs.parse()