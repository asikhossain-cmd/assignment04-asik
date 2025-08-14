function totalFine( fare ) {
    if(fare > 0 && typeof fare === "number") {
        const fineCalculator = fare + (0.2 * fare) + 30;
        return fineCalculator;
    }
    return "Invalid";
}

// const result = totalFine(50);
// console.log(result);

