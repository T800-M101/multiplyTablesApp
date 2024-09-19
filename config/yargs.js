const argv = require('yargs')
    .option('b', {
        alias: 'base',
        description: 'generates multiplication table of given base',
        type:'number',
        demandOption: true
    })
    .option('p', {
        alias: 'print',
        description: 'prints in console multiplication table',
        type: 'boolean',
        demandOption: false,
        default: false
    })
    .option('t', {
        alias: 'to',
        description: 'sets the limit up to which the table will multiply',
        type: 'number',
        demandOption: false,
        default: 10
    })
    .check( (argv, options) => {
        if ( isNaN(argv.b) ) {
            throw('The base should be a number');
        }
        if( isNaN(argv.t) ) {
            throw('The top limit should be a number');
        }
        
        return true;
    })
    .argv;

module.exports = argv;
