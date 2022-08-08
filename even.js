//Nathaniel Xoese Anku (10949927)
//I Nathaniel Xoese Anku endorse this code.
//A program to calculate the average os all even number between 1 and n
function even(num){
let sum = 0;
let avg;
for (let i = 2; i <= num; i += 2){
  sum += i;
  avg = sum/(num/2);
}
console.log(avg);
}
even(10000);











