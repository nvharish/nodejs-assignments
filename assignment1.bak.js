var readline = require('readline');

var inputStream = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput() {
    console.log('1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit\n');
    inputStream.question('Enter your option: ', function (operation) {
        if (operation == 5) {
            inputStream.close();
        } else if (operation >= 1 && operation <= 4) {
            var arrOperations = ['+', '-', '*', '/'];
            inputStream.question('Enter values of a & b separated by space: ', function (values) {
                var [a, b] = values.split(' ');
                try {
                    var result = operate(a, b, operation);
                    console.log(a + ' ' + arrOperations[operation - 1] + ' ' + b + ' = ' + result + '\n');
                } catch (e) {
                    console.log(e.message + '\n');
                }
                getInput();
            });
        } else {
            console.log('Invalid option. Please try again\n');
            getInput();
        }
    });
}

function operate(a, b, operation) {
    a = parseInt(a);
    b = parseInt(b);
    operation = parseInt(operation);
    switch (operation) {
        case 1:
            return a + b;
        case 2:
            return a - b;
        case 3:
            return a * b;
        case 4:
            if (b === 0) {
                throw new Error('Exception: Divided by zero');
            }
            return a / b;
        default:
            return undefined;
    }
}

getInput();
