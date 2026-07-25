//السؤال الاول 
let str = "123";
let num = Number(str);

console.log(num + 7);

//السؤال التاني
let value = 0;

if (!value) {
    console.log("Invalid");
}

//السؤال الثالث
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

//السؤال الرابع
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

//السؤال الخامس
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result);

//السؤال السادس
let day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid Day");
}

//السؤال السابع
let arr = ["a", "ab", "abc"];

let lengths = arr.map(item => item.length);

console.log(lengths);

//السؤال الثامن
function checkNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    } else {
        return "Not divisible";
    }
}

console.log(checkNumber(15));

//السؤال التاسع
const square = num => num * num;

console.log(square(5));

//السؤال العاشر
function personInfo(person) {
    let { name , age , year } = person;

    return {name , age};
}

console.log(personInfo({ name: "John", age: 25 }));

//السؤال الحادي عشر
function sum(a, b, c, d) {
    return a + b + c + d;
}

console.log(sum(1, 2, 3, 4));

//السؤال الثاني عشر
function myPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

myPromise().then(result => console.log(result));

//السؤال الثالث عشر
function largest(arr) {
    return Math.max(...arr);
}

console.log(largest([1, 3, 7, 2, 4]))

//السؤال الرابع عشر
let obj = {
  name: "John",
  age: 30,
};
let keys = function (obj) {
  return Object.keys(obj);
};
console.log(keys(obj));

//السؤال الخامس عشر
function splitWords(text) {
    return text.split(" ");
}

console.log(splitWords("The quick brown fox"));

//  part 3

/**
 * @param {number} init
 * @return {{ increment: Function, decrement: Function, reset: Function }}
 */
var createCounter = function(init) {
    let current = init;

    return {
        increment() {
            return ++current;
        },
        decrement() {
            return --current;
        },
        reset() {
            current = init;
            return current;
        }
    };
};
