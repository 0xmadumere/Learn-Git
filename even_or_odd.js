const prompt = require('prompt-sync')();

function main()
{
    // convert input string to an integer
    let number = parseInt(prompt("Enter a number: "), 10);

    // Validate that the input is actually a valid number
    if (isNaN(number)) 
    {
        console.log("Not a valid number!");
        return;
    }

    let is_even = !(number & 1);

    if (is_even)
    {
        console.log(`your number ${number} is even!`);
    }
    else
    {
        console.log(`your number ${number} is odd!`);
    }
}

main();