// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz += 1;
}
console.log(checkz);
// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var i = 0;
while (i < 3) {
  checkz -= -2;
  i++;
}
console.log(checkz);
// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//The following code is looping through the array called 'numbers' and
// it is adding the value at the given array index to the value of 'total' which
//started at 0.  It will continue to do this until i is less than numbers.length.
// The total at the end should be 28.
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
