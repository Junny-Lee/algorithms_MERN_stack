// Monday
/* 
    Recreate Object.entries method

    Given an object, return an array of arrays of the object's key value pairs, where 
    each key value pair is a 2 item array

    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)

*/

function allNonConsecutive(sortedNums){
    let returnArr = [];
    let objectToAdd = {};
    
    for (let j = 1; j < sortedNums.length; j++){
        if (sortedNums[j] != sortedNums[j-1] + 1){
            objectToAdd = {
                i : j,
                n : sortedNums[j]
            };
            // objectToAdd.i = j;// doesnt work because these are references 
            // objectToAdd.n = sortedNums[j];
            returnArr.push(objectToAdd);
        }
    }
    return returnArr;
}

function reCreateEntries(obj){
    let returnArr = [];
    let arrToAdd = [];
    for (key in obj){
        arrToAdd = [key, obj[key]];
        returnArr.push(arrToAdd);
    }
    returnArr.pop();
    returnArr.pop();
    return returnArr
}

// cody's solution:
function entries(obj){
    const output = []; // obviously we need our output array to push things into

    for(const key in obj) { // loop through the keys in our object
        if(obj.hasOwnProperty(key)){ // now, .hasOwnProperty(key) will allow us to differentiate between whether the key is native to the object
            // WE defined, or if it was part of the prototype object.
            output.push([key, obj[key]]); // then take the array containing the key value pair and push it into our output
        } 
    }

    return output; // and voila, done!
}

// EXAMPLE:
const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };
const obj1 = Object.assign(Object.create(proto), {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13
});

const expected1 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13]
]

console.log(reCreateEntries(obj1))


/* 
    Given a table name string and an object whose key value pairs represent column names 
    and values for the columns, return a SQL insert statement string

    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it
    easy to add variables into a string or to add quotations without needing to escape them.

    Bonus: after solving it, write a 2nd solution focusing on functional programming using 
    built in methods
*/

function insert(tableName, data) {
    let returnArr1 = [];
    let returnArr2 = [];
    let returnStr = "INSERT INTO " + tableName +  " ("
    for (key in data){
        if (data.hasOwnProperty(key)) {
            returnArr1.push(key);
            if (typeof data[key] == "string") returnArr2.push(data[key]);
    }
    return (returnArr1)
}

// cody's first answer:
function insert(tableName, columnValuePairs) {
    // there are a TON of ways to do this one. you can go SUPER basic with
    // controlling each character, to using some more complex methods to kind of stitch
    // things together seamlessly.

    // This solution will all be built on string concatenation
    let query = `INSERT INTO ${tableName} (`; // so start with the first part of our string

    for(const column in columnValuePairs){ // loop through the keys in what was given to us
        if(query[query.length-1] !== '('){ // this is potentially dangerous: if the previous character in our query is an open parentheses, we're looking at the first column.
            query += ', '; // so, as long as we're not on the FIRST column, we'll add the trailing comma to separate our column names
        }

        query += column; // then add the column name to our query string
    }

    query += `) VALUES (`; // now, concatenate that middle portion

    
    for(const column of columnValuePairs){ // loop through the columns again
        if(query[query.length-1] !== '('){ // same logic. if the last character of the query string is an open parentheses, we're looking at the first column's value
            query += ', '; // so, as long as we're not looking at the first column, we want to add the comma before we add the new value
        }

        // now here we need to do some data checking. if the value is a string or datetime object, wrap it in quotes
        if(typeof columnVauePairs[column] === "string"){
            query += `'${columnVauePairs[column]}'`;
        } else{ // for the sake of this algo, we'll assume that otherwise, the value is a number or boolean.
            query += columnVauePairs[column];
        }

    }

    query += ');'; // then finally, concatenate the ending to the query

    return query; // and return it
}

// cody's second answer:
function insertFunctional(tableName, columnValuePairs){
    const columns = Object.keys(columnValuePairs).join(", "); // splits the keys up into an array, then joins the elements in the array together as a string with ", " between them.
    const values = Object.values(columnValuePairs) // splits the keys up into an array
        .map( val => typeof val === "string" ? `'${val}'` : val) // and run map to replace that array with a modified version. if a value is a string, wrap it in quotes, otherwise don't.
        .join(', '); // finally, take the values of that array, and stitch them together as one big string, where each value is separated by ", "
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`; // finally, drop the relevant parts into their respective sections of the query string
}


// EXAMPLE
const table = "users";
const insertData = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected = "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// console.log(insert(table, insertData))
console.log(insertFunctional(table, insertData))


// ******************************************************************
// Tuesday
/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.
    Bonus: write a 2nd solution using build in methods to practice functional
    programming.
    // Bonus 2: write this as an array prototype method
    Array.prototype.methodName = function(someparameter){

    }
*/

// Trey's solution 
function findObjects(criteria, collection){
    let output = [];
    let flag = false;
    for (let i = 0; i < collection.length; i++){
        for (key in criteria){
            if (criteria[key] == collection[i][key]) flag = true;
            else {
                flag = false;
                break;
            }
        }
        if (flag) {
            output.push(collection[i])
        }
    }
    return output
}

const collection1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 }, { firstName: "John", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Smith", age: 27 },{ firstName: "Bob", lastName: "White", age: 31 },
];

const criteria1 = {firstName: "Bob", age: 31,};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];
console.log(findObjects(criteria1, collection1))



function findObjectsFunctional = (criteria, collection) => collection.filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]))

// BONUS 2:
Array.prototype.find = function(criteria){
    return this.filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]))
}

/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
    
    BONUS: accept a 4th parameter that is a function to be run on the update
*/
const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];
const searchId = 3;
const updateData = { redBeltStatus: true, isLateToday: true };
const expected2 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};
console.log(findByIdAndUpdate(searchId, updateData, students))

function findByIdAndUpdate(id, updatedVals, collection) {
    let found = false;
    let index = 0;

    while (!found){
        for (key in collection){
            if (collection[id] == id){
                found = true;
                for (key in updatedVals){
                    collection[key] = updatedVals[key];
                }
                return collection[index]
            }
            index++;
        }
    }
    return {}
}

// ******************************************************************
// Wednesday