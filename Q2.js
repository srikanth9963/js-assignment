let fruits=['mango','guava','Apple','Banana']
console.log(fruits.toString()); //convert array into string
console.log(fruits.join('&'));  //convert array into string with a seperator
console.log(delete fruits[0]); 
console.log(fruits.splice(2,1)); //splices the array first element denotes from whr our result array should start and 2nd num denotes to where it should end
console.log(fruits.slice(0)); // slices an array
console.log(fruits.sort());   // sort an array according to albetical order

// string methods
 let str='apple,banana,mango,lemon';
let pos=str.search('banana')
console.log(pos);  // search the index of the starting of given string
console.log(str.substring(6,12));  //slices the string
console.log(str.replace('banana','orange')); //replaces the word
console.log(str.charAt(1)); //returns the charcter at that position
console.log(str.charCodeAt(1)); //returns the ascii value of the char at that position
