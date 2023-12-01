/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/


function lengthOfLastWord(s) {
    let length = 0;

    // Trim the spaces
    s = s.trimRight();

    // Iterate from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        // Check for the non-space character
        if (s[i] !== ' ') {
            // Count characters until the next space is encountered
            while (i >= 0 && s[i] !== ' ') {
                length++;
                i--;
            }
            break;
        }
    }

    return length;
}


// testcase 1
const inputStr1 = "Hello World";
const enLastWord1 = lengthOfLastWord(inputStr1);
console.log(`testcase 1 - Input: "${inputStr1}", Output: ${enLastWord1}`);

// testcase 2
const inputStr2 = "   fly me   to   the moon  ";
const lenLastWord2 = lengthOfLastWord(inputStr2);
console.log(`testcase 2 - Input: "${inputStr2}", Output: ${lenLastWord2}`);


function isAnagram(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    if (s1.length !== s2.length) {
        return false;
    }

    let l1 = [];
    let l2 = [];

    for (let i = 0; i < s2.length; i++) {
        l1.push(s1.charAt(i));
        l2.push(s2.charAt(i));
    }

    l1.sort(); // JavaScript's sort method sorts strings lexicographically
    l2.sort();

    // Array -> String
    // Compare String

    return l1.join('') === l2.join('');
}

// testcase 1
const inputStr1a = 'listen';
const inputStr1b = 'silent';
const isAnagramOut1 = isAnagram(inputStr1a, inputStr1b);
console.log(`Example 1 - Output: ${isAnagramOut1}`);  // Output: true

// testcase 2
const inputStr2a = 'hello';
const inputStr2b = 'world';
const isAnagramOut2 = isAnagram(inputStr2a, inputStr2b);
console.log(`Example 2 - Output: ${isAnagramOut2}`);  // Output: false

