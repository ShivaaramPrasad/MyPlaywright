/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

const studentScore = 100;

function calculateGrade(score) {
   let grade;

   switch (true) {
       case score >= 90:
           grade = 'A';
           break;
       case score >= 80:
           grade = 'B';
           break;
       case score >= 70:
           grade = 'C';
           break;
       case score >= 60:
           grade = 'D';
           break;
       default:
           grade = 'F';
   }

   return grade;
}

const result = calculateGrade(studentScore);

console.log(`The student's score of ${studentScore} corresponds to the grade: ${result}`);

