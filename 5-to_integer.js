// A script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer

const num = parseInt(process.argv[2]);

console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);