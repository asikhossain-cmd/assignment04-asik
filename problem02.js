function  onlyCharacter( str ) {
    if(typeof str == "string") {
        let stringArray = str.split(" ");
        let problemSolved = stringArray.join("").toUpperCase();
        // problemSolved.toUpperCase();
        return problemSolved;
    }
    return"Invalid";
}

// let sampleString = onlyCharacter("  h e llo wor   ld");
// console.log(sampleString);