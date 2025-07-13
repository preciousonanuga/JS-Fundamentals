// A script that prints the addition of 2 integers

function add(a, b) {
    const num1 = parseInt(a);
    const num2 = parseInt(b);

    if (isNaN(num1)  ||  isNaN(num2)) {
        console.log("NaN");
    } else {
        console.log(num1 + num2);
    }
}

// Get command-line arguments (first two after node and script name)
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Call the add function with the arguments
+add(arg1, arg2);