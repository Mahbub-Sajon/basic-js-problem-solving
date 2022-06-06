// Problem-two 

function pandaCost (shingara, somucha, jilapi){

    // Error checking

    if(typeof shingara != 'number' && typeof somucha != 'number' && typeof jilapi != 'number'){
        return "Please enter a valid input!";
    }

    // Calculation and returning

    const perShingaraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;
    const totalShingaraPrice = shingara * perShingaraPrice;
    const totalSomuchaPrice = somucha * perSomuchaPrice;
    const totalJilapiPrice = jilapi * perJilapiPrice;
    const totalCost = totalShingaraPrice + totalSomuchaPrice + totalJilapiPrice;
    
        return totalCost;
}

// Calling

const totalPieces = pandaCost(5, 5, 5);
console.log(totalPieces);