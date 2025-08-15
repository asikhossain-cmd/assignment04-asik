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
        // problemSolved.toUpperCase();
        return problemSolved;
    }
    return"Invalid";
}
// let sampleString = onlyCharacter("  h e llo wor   ld");
// console.log(sampleString);



function  bestTeam( player1, player2 ) {
    if(typeof (player1) == "object" && typeof (player2) == "object" && !Array.isArray(player1) && !Array.isArray( player2) && player1 !== null && player2 !== null && typeof (player1) !== "undefined" && typeof (player2) !== "undefined" && typeof player1.name == "string" && typeof player1.foul == "number" && typeof player1.cardY == "number" && typeof player1. cardR == "number" && typeof player2.name == "string" && typeof player2.foul == "number" && typeof player2.cardY == "number" && typeof player2. cardR == "number" ){
        let calculateFairForFirstTeam = player1.foul + player1.cardY + player1.cardR;
        let calculateFairForSecondTeam = player2.foul + player2.cardY + player2.cardR;

        if(calculateFairForFirstTeam < calculateFairForSecondTeam) {
            return(player1.name);
        } else if(calculateFairForFirstTeam == calculateFairForSecondTeam) {
            return"Tie";
        } else{
            return(player2.name);
        }
    } else{
        return"Invalid";
    }
}

// let object01 = { name: "Germany", foul: 10, cardY: 1, cardR: 2};
// // console.log(typeof object01)
// // console.log(typeof (object01))
// let object02 = {
//     name: "Argentina",
//     foul: 20, 
//     cardY: 1,
//     cardR: 0,
// }
// const consoleOutput = bestTeam(object01, object02);
// console.log(consoleOutput)



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
// const array1 = [5,4,6,10];
// const array2 = [5,4,6];
// const outputisSame = isSame(array1, array2);
// console.log(outputisSame);



function  resultReport( marks ) {
    if(Array.isArray(marks)){
        let sumOfMarks = 0;
        let getPassMark = [];
        let getFailMarks = []
        for (let i = 0; i < marks.length; i++){
            sumOfMarks += marks[i];
            if(marks[i] >= 40){
                getPassMark.push(marks[i]);
            }
            if(marks[i] < 40) {
                getFailMarks.push(marks[i]);
            }
        }    
        let average = (sumOfMarks / marks.length);
        let averageRound = Math.round(average);

        if(isNaN(averageRound)) {
            averageRound = 0;
        }
        
        let getPassMarkLength = getPassMark.length;
        let getFailMarkslength = getFailMarks.length;

        return (
            {
                finalScore: averageRound,
                pass: getPassMarkLength,
                fail: getFailMarkslength,
            }
        )
    }
    return"Invalid"
}
// let markGet = [39, 40, 100, 10, 55, 85];
// const output = resultReport(markGet);
// console.log(output);
