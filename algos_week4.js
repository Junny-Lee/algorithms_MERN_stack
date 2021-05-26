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
    // create table
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