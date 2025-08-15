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
