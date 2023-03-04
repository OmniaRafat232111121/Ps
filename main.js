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
//Part 2
/*execise 1
create a new STring taking first 3 chracter and adding them together
 */
// const makeNewString=(str)=>{
//     return str.length < 3 ? str : str.slice(0,3) + str.slice(-3)

// }
// console.log(makeNewString('abcdef'))

/*excersise 2
write a javascript program to extract the first half string of even length
*/
// const firstHalf=(str)=>{
//     return str.slice(0,Math.floor(str.length/2))

// }
// console.log(firstHalf('template'))
// console.log(firstHalf('temp'))

/*exercise 3
write a program to concate strings except the first string
*/
// const concatinationString=(str1,str2)=>{
//     return str1.slice(1)+ str2.slice(1)

// }
// console.log(concatinationString('abc','def'))
// const conString=(str)=>{
//     return str.slice(1);
// }
// console.log(conString("helllo"))
/*excersice 4
Given two number which is nearst number to 100 
*/
// const closeTo100=(a,b)=>{
//     return (100-a) > (100-b) ? a :b;
// }
// console.log(closeTo100(40,90))
// console.log(closeTo100(90,10))
/*exercise 5=>>>>>>>> */
// const countChars=(str,char)=>{
//     return str.split(" ") .filter(ch=> ch === char ).length;
// }
// const count2TO4=(str,char)=>{
//     return countChars(str,char) >=2 &&  countChars(str,char) <= 4 ;
// }
// console.log(count2TO4('ooh!',"o"))
// console.log(count2TO4('oh!',"o"))



/*part 3
1)Write a JavaScript program to find the number of even digits in a an array of integers

*/
// const findEvenNumber=(arr)=>{
//     return arr.filter((number)=>number%2 == 0).length;

// }
// console.log(findEvenNumber([1,2,3,4,5,8,3,1,1,5,1]))
// console.log(findEvenNumber([5,1]))


/*
Write a JavaScript program to find the number of even values up to a given number

*/ 
// function even_digits(num) {
//     var ctr = 0;
//     while (num) {
//       ctr += num % 2 === 0;
//       num = Math.floor(num / 10);
//     }
//     return ctr;
//   }
// console.log(even_digits(12623));


/*Write a JavaScript program to check whether a given array of integers is sorted in ascending
order*/
// const isAscending=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i+1] > arr[i]){
//             return true;
//         }
//         else{
//             return false
//         }

//     }
// }
// console.log(isAscending([1,2,5,6,10]))
// console.log(isAscending([10,2,4]))

/*get larget even number of an array*/
// const largetEven=(array)=>{
//     return Math.max(...array.filter(num=>num %2 ===0))
// }
// console.log(largetEven([1,4,5,3,9,10,11]))


/*Write a JavaScript program to replace the first digit in a string (should contain at least one
digit) with a $ character.*/
/*abcd1abfff=abcd$abfff*/
// const replaceDigit=(string)=>{
//     return string.replace(/[0-9]/,'$')


// }
// console.log(replaceDigit('abcdef31abddjj'))


/*part 4*/
/*
Given a year report if it is a leap year

*/
// const isLeap=(year)=>{
//     return year% 4 === 0;
// }
// console.log(isLeap(2024))



// const matches = (obj, source) =>
// Object.keys(source).every(key=>obj.hasOwnProperty(key))
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }));

// const objA={a:1,b:2,c:1};
// const objB={a:1,b:1,c:1};
// const objC={a:1,b:2,d:1};

// const objectsEqual=(a,b)=>{
//     // console.log(Object.keys(a));
//     // console.log(Object.keys(b));
//     return Object.keys(a).every(key=>b[key])


// }
// console.log(objectsEqual(objA,objB));


// const paraCsv=(csvString)=>{
//     return csvString.split('\n').map(row=>row.split(','))
// }
// const str=`
//     abc,def,ghi
//     jkl,mno,pqr
//     stu,vwx,yza
//     `

// console.log(paraCsv(str))


// const getRandomHexNumber=()=>{
    
//     return Math.floor(Math.random() * 16).toString(16);
// }
// const getRandomHexColor=()=>{
//     return '#' +Array.from({length:6}).map(getRandomHexNumber).join("");
// }
// console.log(getRandomHexColor())
// console.log(getRandomHexColor())
// console.log(getRandomHexColor())
// console.log(getRandomHexColor())
/*exercise 5*/
// console.log([1,2,3,4,5].every(x=>x < 10));



/*part 5*/
/*ex1*/
// const albeticOrder=(str)=>
// str.split('').sort((a,b)=>{
//     return a >b ? 1 : -1
// })
// .join("")


// console.log(albeticOrder('javascript'))

/*ex2*/
// const countLetters=(str,letters=['a','e','i','o','u'])=>{
//     return str
//     .split("")
//     .filter(s=>letters.indexOf(s) > -1)
//     .length;
// }
// console.log(countLetters('abcde'))