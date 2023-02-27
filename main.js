/*excercise1
-------------
write a jsprogramif two number are 100 or sum of numbers are 100
return true else return false
*/

// const isEqualTo100=(a,b)=>{
//     return a === 100 || a+b === 100 ? true: false; 
// }
// console.log(isEqualTo100(10,90))

/*exercise2
write a javascript program to get the extenstion of fileName
*/
// const getFileExtenstion=(str)=>{
//     return str.slice(str.lastIndexOf('.'))

// }
// console.log(getFileExtenstion("index.html"))

/*exercise 3
write a program to replace every character in given Stringwith chracter gollowing in alphet
String.fromCharCode() method converts Unicode values to characters
char.charCodeAt()
*/
// const moveCharacterForward=(str)=>{
//     return str.split("")
//     .map(char=>String.fromCharCode(char.charCodeAt(0)+1))
//     .join("")

// }
// console.log( moveCharacterForward("Hello"))
/*excercise4
Date 
*/
// const formatDate=(date=new Date())=>{
//     const days=date.getDate() + 1;
//     const months=date.getMonth() + 1;
//     const years=date.getFullYear();
//     return ` ${days}/${months}/${years}`;
     
// }
// console.log(formatDate())

/*ercercise 5
write a program to create a new string adding New! in front of given String if
already start with New! return astring 
*/
// const addNew=(str)=>{
//   return str.indexOf('New!') === 0 ? str: ` New! First ${str}`
// }
// console.log(addNew('Hello'))