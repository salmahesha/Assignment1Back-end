// #region Question 1

function convertToNumber(str) {
    return Number(str) + 7;
}
console.log(convertToNumber("123"));

// #endregion Question 1
//#region Question 2
function checkFalsy(ele) {
    return !ele ? "invalid" : "valid";
}
console.log(checkFalsy(0));


//#endregion Question 2
//#region Question 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) { continue; }
    console.log(i);
}


//#endregion Question 3
//#region Question 4
let arr = [1, 2, 3, 4, 5];
let evenArr = arr.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArr);


//#endregion Question 4
//#region Question 5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);
//#endregion Question 5
//#region Question 6
let dayNumber = 5;
let dayName = "";
switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = `${dayNumber} is not valid number of day!!`;
}
console.log(dayName);
//#endregion Question 6
//#region Question 7
let arrMapping = ["a", "ab", "abc"];
let arrLen = arrMapping.map((ele) => ele.length)
console.log(arrLen);

//#endregion Question 7
//#region Question 8
function isDivideByThreeAndFive(num) {
    if (num % 5 == 0 && num % 3 == 0) { return "Divisible by both"; }
    else { return "Not divisible by one of them or both"; }
}
console.log(isDivideByThreeAndFive(15));


//#endregion Question 8
//#region Question 9
let squareNumber = num => num ** 2;
console.log(squareNumber(5));
//#endregion Question 9
//#region Question 10
function destructureObject(obj) {
    let { name, age } = obj;
    return `${name} is ${age} years old`;
}
console.log(destructureObject({ name: "Salma", age: "20" }));


//#endregion Question 10
//#region Question 11
function summation(...nums) {
    let res = 0;
    for (let num of nums) { res += num; }
    return res;
}
console.log(summation(1, 2, 3, 4, 5));


//#endregion Question 11
//#region Question 12 
function promises(){
    return new Promise((resolve, reject) => {
        resolve("Success");
        
    });
}
console.log(promises());

//#endregion Question 12
//#region Question 13
function findLargestNum(arr) {
    let large = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[large]) { large = i; }
    }
    return arr[large];
}
console.log(findLargestNum([1, 3, 7, 2, 4]));


//#endregion Question 13
//#region Question 14
function returnKeys(obj) {
    return Object.keys(obj);
}
console.log(returnKeys({ name: "John", age: 30 }));


//#endregion Question 14
//#region Question 15
function splitString(text) {
    return text.split(" ");
}
console.log(splitString("The quick brown fox"));


//#endregion Question 15

