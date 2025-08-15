function  isSame(arr1 , arr2 ) {
    if(Array.isArray(arr1) && Array.isArray(arr2)) {
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) {
                return false;
            } 
        }
        return (arr1.length == arr2.length);
    }
    return"Invalid";
}


const array1 = [5,4,6,10];
const array2 = [5,4,6];
const output = isSame(array1, array2);
console.log(output);