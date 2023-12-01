/*
Classroom 1

int val = 10; // 1,2,3,4,...10
function for odd or even !!

print odd numbers between 1 to n // 1,3,5,7,9


Classroom 2

int val = 5;
funtion to sum all the values between 1 to n 
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, i need the sum !! 

*/

function printOddNumbers(n) {
    console.log("Odd numbers between 1 and " + n + ": ");

    for (let i = 1; i <= n; i++) {
        // Check if the  number is odd
        if (i % 2 !== 0) {
            console.log(i);
        }

    }
}

printOddNumbers(10);


function sumValuesUpToN(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

// Example usage with n = 5
const result = sumValuesUpToN(10);
console.log(`The sum of values between 1 and 5 is: ${result}`);

/*

Classroom Assignment 1:

let yourName = "suresh";
write a function to reverse the string.

// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string

Classroom Assignment 2:

If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

let firstName="Shivaaram"

function reverseStringCharAt(firstName) {
    let reversedfirstName = '';

    // Loop through the characters in reverse direction
    for (let i = firstName.length - 1; i >= 0; i--) {
        // Use charAt to get the character at the current position
       // reversedfirstName += firstName.charAt(i);
        reversedfirstName =reversedfirstName.concat(firstName.charAt(i));
    }

    return reversedfirstName;
}


function isPalindrome(){
    if(reverseStringCharAt(firstName) ===firstName ){
        console.log(`Given name ${firstName} is Palindrome`);

    } else {
        console.log(`Given name ${firstName} is not Palindrome`);

    }
}

let reversedfirstName = reverseStringCharAt(firstName);
console.log(`Original: ${firstName}`);
console.log(`Reversed: ${reversedfirstName}`);
isPalindrome();

/*Find the number of occurances. // Easy

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum // Medium 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)
*/
const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

function countOccurrences(array, target) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences(nums,k));




function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }

    // Return an empty array if no such pair is found
    return [];
}

const numarray = [2,4,7,8,11,14];
const target = 18;

const resultTwoSum = twoSum(numarray, target);
console.log(resultTwoSum);