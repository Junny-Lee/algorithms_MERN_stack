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

// cody's answer:
function insertFunctional(tableName, columnValuePairs){
    const columns = Object.keys(columnValuePairs).join(", ");
    const values = Object.values(columnValuePairs)
        .map( val => typeof val === "string" ? `'${val}'` : val)
        .join(", ")
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
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