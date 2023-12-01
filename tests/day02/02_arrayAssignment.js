/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/

function moveZeroesRight(nums) {
    let numbers = [];
    let zero = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero.push(nums[i]);
        } else {
            numbers.push(nums[i]);
        }
    }

    numbers = numbers.concat(zero);

    return numbers;
}

// testcase
const nums = [0, 1, 0, 3, 12];
const result = moveZeroesRight(nums);
console.log("Output:", result);  // Output: [1, 3, 12, 0, 0]


function intersection(nums1, nums2) {
    // Use filter to keep elements that are present in both arrays
    const result = nums1.filter(num => nums2.includes(num));

    // Use Set to remove duplicates
    return [...new Set(result)];
}

// Example
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const interSecresult = intersection(nums1, nums2);
console.log("Output:", interSecresult);  // Output: [2]


function findMaxMinIndices(nums) {
    if (nums.length === 0) {
        return "Array is empty.";
    }

    let maxIndex = 0;
    let minIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        } else if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
    }

    const maxResult = `Maximum Element: ${nums[maxIndex]}, Index: ${maxIndex}`;
    const minResult = `Minimum Element: ${nums[minIndex]}, Index: ${minIndex}`;

    return { max: maxResult, min: minResult };
}

// Example
const nums3 = [34, 7, 21, 89, 54, 10, 91, 67];
const { max, min } = findMaxMinIndices(nums3);
console.log(max);
console.log(min);

function removeDuplicates(inputArray) {
    const uniqueSet = new Set(inputArray);
    const resultArray = Array.from(uniqueSet);
    return resultArray;
}

// Example
const inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
const resultArray = removeDuplicates(inputArray);
console.log("Output:", resultArray);  // Output: [1, 2, 3, 4, 5, 6]



