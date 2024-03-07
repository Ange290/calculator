const {add, subtract, multiply, divide} = require('./node_modules/uwitonze-basic-calculator/index');

console.log('The addition is' ,add(5,5));
console.log('The substraction is' ,subtract(10,5));
//console.log('The multiplication is' ,multiply(2,5));
console.log('The division is',divide(10,2));
console.log('Multiplication table of 9 :');
for(let c =1; c<= 10; c++){
console.log( c +'* 9 =' +multiply(c,9));
}
//console.log('The multiplication is' ,multiply());