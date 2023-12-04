
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const arr = [10, 2, 7, 9, 1, 1, 1, 8, 9, 1];
// const arr = [1, 1, 1, 1, 1];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = [10, 10, 7, 9, 1, 4, 9, 9, 9, 1];
// const arr = [2];

// Display array element on specific index
function debugArray(i, j, arr) {
    console.log('arr[', i, ']:', arr[i], ', arr[', j, ']:', arr[j])
}

// Display array
function displayArray(arr) {
    console.log('Array:', arr)
}

// Sort array in ascending order
function sortAscArray(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

// Sort array in descending order
function sortDescArray(arr){
    console.log('Hellow')
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

// Find element in an array
function searchInArray(s, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === s) return i;
    }
}

// Reverse an array
function reverseArray(arr) {
    isArraySizeEven = arr.length % 2 == 0;

    for(let i = 0; i < arr.length; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp
        if(isArraySizeEven) {
            if(i == arr.length/2 - 1) return
        } else {
            if(i == ((arr.length - 1) / 2) - 1) return
        }
    }
}

// Find distinct elements in an array
function findDistinctInArray(arr) {
    elements = [];
    repeat = false;
    elements.push(arr[0]);

    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            if(elements[j] === arr[i]) { 
                repeat = true;
                break;
            }
        }
        if(!repeat) {
            elements.push(arr[i]);
            repeat = false;
        }
    }
    return elements;
}

// Find repetitive elements in an array
function findDuplicateInArray(arr) {
    elements = [];
    repeat = false;
    let repeatElement;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) { 
                repeatElement = arr[i]
                repeat = true;
                break;
            }
        }
        if(repeat) {
            for(let k = 0; k < elements.length; k++) {
                if(elements[k] === arr[i]) {repeat = false; }
            }
            if(repeat) { 
                elements.push(arr[i]);
                repeat = false;
            }
        }
    }
    return elements;
}



// sortAscArray(arr);
// sortDescArray(arr);
// console.log(searchInArray(2, arr));
// reverseArray(arr);
// console.log(findDistinctInArray(arr));
// console.log(findDuplicateInArray(arr));

// displayArray(arr);



