//  Monday
/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
function dropIt(arr, callback){
    let returnArr = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            for (let j = i; j < arr.length; j++){
                returnArr.push(arr[j]);
            }
            break;
        }
    }
    return returnArr;
}

// reid's solution 
function dropIt(arr, callback){
    let i = 0;
    while (!callback(arr[i])&& (i<arr.length)){
        i++
    }
    return arr.splice(i);
}

const nums1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];
console.log(dropIt(nums1, callback1))

const nums2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];
console.log(dropIt(nums2, callback2))

const nums3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];
console.log(dropIt(nums3, callback3))


// ***********************************
// Tuesday 
/* 
    Given in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?
*/

function canStringBecomePalindrome(str){
    // create frequency table
    let table = {}
    let letterAppearsOnce = false;
    for (let i = 0; i < str.length; i++) {
        if (table.hasOwnProperty(str[i])) {table[str[i]]++;}
        else { table[str[i]] = 1; }
    }
    if (str.length % 2 == 0){ //even
        for (key in table) {
            if (table[key] == 1){
                return false
            }
        }
    }
    else { // odd
        for (key in table) {
            if (table[key] == 1 && letterAppearsOnce == false){
                letterAppearsOnce = true;
            }
            else if(table[key] == 1 && letterAppearsOnce == true ) {
                return false
            }
        }   
    }
    return true;
}

// cody's solution
function canStringBecomePalindrome(str) {
    // the secret here is recognizing that a string can become a palindrome in 2 cases:
        // 1. Even length string: every character appears an even number of times
        // 2. Odd length string: 1 character appears an odd number of times, while the rest appear an even number of times.
    // so, we should opt for a frequency table to keep track of how many times each character appears.
    // NOTE: It's physically impossible for an even length string to only have 1 character appear an odd number of times
    const freqTable = {};

    for(let i = 0; i < str.length; i++) {
        const character = str[i].toLowerCase(); // I'd consider different capitalizations as the same character, so let's sterilize
        if(!freqTable.hasOwnProperty(character)){ // if our frequency table doesn't have an entry for this character
            freqTable[character] = 1; // add one, and give it a value of 1
        } else {
            freqTable[character]++; // otherwise, increment the value already there
        }
    }

    // now, we need to see how many times an odd character appears:
    let oddCount = 0; // let's keep track of the number odd entries
    for(const key in freqTable){
        if(freqTable[key] % 2 !== 0) {// if this character appeared an odd number of times
            oddCount++; // increment our odd count
            if(oddCount > 1) { // if there are more than 1 characters that appear an odd number of times
                return false;
            }
        }
    }

    // if we've made it this far, than the string can be rearranged as a palindrome
    return true;
}

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"
console.log(canStringBecomePalindrome(str4))

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"
console.log(canStringBecomePalindrome(str5))

const str6 = "abc";
const expected6 = false;
console.log(canStringBecomePalindrome(str6))

// ***********************************
// Thursday
/* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time (can do for loops. one for loop is O(n), two for loops is O(2n))
*/
function backspaceStringCompare(S, T){
    let newS = "";
    let newT = "";
    for (let i = 0 ; i < S.length; i++){
        if (S[i] != "#") {newS = newS + S[i]}
        else {newS = newS.slice(0, newS.length-1)}
    }
    for (let i = 0 ; i < T.length; i++){
        if (T[i] != "#") {newT = newT + T[i]}
        else {newT = newT.slice(0, newT.length-1)}
    }
    return (newS == newT)
}

// array solution (allows you to use pop instead of slice method)

// dana's solution: space is O(1) & time is O(n)

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
console.log(backspaceStringCompare(S1,T1));

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
console.log(backspaceStringCompare(S2,T2));

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
console.log(backspaceStringCompare(S3,T3));

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
console.log(backspaceStringCompare(S4,T4));

// ***********************************
// Friday
/* 
    Given two strings, version1, and version2, both representing version numbers
    If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
    Helpful methods:
        - .split(characterToSplitOn)
        - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
        - .parseInt
        - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
    Bonus, solve without .split
*/
function compareVersionNumbers(v1, v2) {
    let splitV1 = v1.split("."); //
    let splitV2 = v2.split("."); //
    
    let i = 0;
    while (parseInt(splitV1[i]) == parseInt(splitV2[i])){ //
        i++;
    }
    if ( splitV1[i] == undefined || splitV2[i]  == undefined ) { // compare to length not undefined
        if (splitV1[i] == undefined && splitV2[i]  == undefined ) {return 0}
        else if (splitV1[i] == undefined ) {
            return -1;
        } else return 1;
    }
    else {
        if (parseInt(splitV1[i]) > parseInt(splitV2[i])) {
            return 1;
        } else if ( parseInt(splitV1[i]) < parseInt(splitV2[i])) {
            return -1;
        } else return 0
    }
}

// space = O(n + m) for v1 and v2. still linear
// time = O(3n). this is ~ O(n) for large data set. if smaller, the relative diff. is greater 

const test6V1 = "1.001.5";
const test6V2 = "1.1.3";
console.log(compareVersionNumbers(test6V1, test6V2));

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;
console.log(compareVersionNumbers(test1V1, test1V2));

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;
console.log(compareVersionNumbers(test2V1, test2V2)); //

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;
console.log(compareVersionNumbers(test3V1, test3V2));

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;
console.log(compareVersionNumbers(test4V1, test4V2)); //

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
console.log(compareVersionNumbers(test5V1, test5V2));

