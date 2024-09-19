const { createFile } = require('./helpers/multiply');
const  argv = require('./config/yargs');

console.clear();

const base = argv.b;
const print = argv.p;
const to = argv.t;

createFile(base, print, to)
    .then( response => console.log(response))
    .catch( err => console.log(err));


 





  
