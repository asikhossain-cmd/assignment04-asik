function totalFine( fare ) {
    if(fare >= 0 && typeof fare === "number") {
        const fineCalculator = fare + (0.2 * 100) + 30;
        return fineCalculator;
    }
    return "Invalid";
}


const store = totalFine(500)
console.log(store);
