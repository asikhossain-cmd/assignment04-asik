function totalFine( fare ) {
    if(fare > 0 && typeof fare === "number") {
        const fineCalculator = fare + (0.2 * fare) + 30;
        return fineCalculator;
    }
    return "Invalid";
}

// const result = totalFine(200);
// console.log(result);


function  onlyCharacter( str ) {
    if(typeof str == "string") {
        let stringArray = str.split(" ");
        let problemSolved = stringArray.join("").toUpperCase();
        // problemSolve.toUpperCase();
        return problemSolved;
    }
    return"Invalid";
}

let sampleString = onlyCharacter("he ll o");
console.log(sampleString);

