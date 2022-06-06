// Problem-three

function picnicBudget (personNumber){

    // Fixed amount which should be given by specific category of person 

    fixedAmountForFirstHundred = 5000;
    fixedAmountForSecondHundred = 4000;
    fixedAmountForRestHundred = 3000;

    // Error checking 

    if(typeof personNumber != 'number'){
        return "Please enter a valid input!";
    }

    // For first 100 person 

    else if(personNumber<=100){
        const totalAmount = personNumber * fixedAmountForFirstHundred;
        return totalAmount;
    }

    // For first 100 and second 100 person 

    else if(personNumber<=200){
        amountForFirstHundred = 100 * fixedAmountForFirstHundred;
        remaindedPerson = personNumber - 100;
        amountForSecondHundred = remaindedPerson * fixedAmountForSecondHundred;
        totalAmount =  amountForFirstHundred + amountForSecondHundred;
        return totalAmount;
    }

    // When there is more than 200 person 

    else{
        amountForFirstHundred = 100 * fixedAmountForFirstHundred;
        amountForSecondHundred = 100 * fixedAmountForSecondHundred;
        restRemaindedPersn = personNumber - 200;
        amountForRestPerson = restRemaindedPersn * fixedAmountForRestHundred;
        totalAmount = amountForFirstHundred + amountForSecondHundred + amountForRestPerson;
        return totalAmount;
    }
}

// Calling 

const totalTravellingPerson = 375;
const totalPicnicCost = picnicBudget(totalTravellingPerson);
console.log(totalPicnicCost);