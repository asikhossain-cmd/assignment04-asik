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


let markGet = [];
const output = resultReport(markGet);
console.log(output);
