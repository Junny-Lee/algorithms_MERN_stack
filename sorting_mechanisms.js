// Bubble Sort
function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
    }
    }
    return arr;
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]

// ***********************************
// Selection Sort
function selectionSort(arr){
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
        if(arr[j]<arr[minIdx]){
            minIdx = j;
        }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    }
    return arr;
}