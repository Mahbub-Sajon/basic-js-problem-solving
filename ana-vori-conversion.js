// Problem-One 

function anaToVori (ana){

    // Error Checking 

    if(typeof ana != 'number'){
        return 'Please enter a valid input!';
    }

    // Calculation and returning 

    var vori = ana/16;
        return vori
}

// Calling

const totalAna = 32;
const totalVori = anaToVori(totalAna);
console.log(totalVori);
