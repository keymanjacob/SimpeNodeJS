const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach( (note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}































// const os  = require('os');
/* basics */
/*var user = os.userInfo();
console.log(user);
fs.appendFile('greetings.txt', user);
fs.appendFileSync('greetings.txt', user);
fs.appendFile('greetings.txt', `Hello ${user.username}, You are ${notes.age}`, (err) => {
    if (err){
        console.log('Unable to write to the file');
    }
});
var res = notes.addNote();
var res = notes.add(1, 2);
console.log(res);

console.log(_.isString(true));
console.log(_.isString('2323'));

var filteredArray = _.uniq(['Jacob', 1, 'Jacob',1,2,3,4]);
console.log(filteredArray);*/

