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



// Problem-Four

function oddFriend(friends){

    
  // Checking whether even or odd 

  for(const friend of friends){
      if(friend.length % 2 != 0){
              
          // Error checking

          if(typeof friend != 'string'){
              return 'Please enter a valid input!';
          }
          return friend;
      }      
      }
  }
  
// Calling

const friendList = ['Raahim', 'Kaarim', 'Mahbub', 'Zaaved', 'Sajon', 'Jashim', 'Rasel', 'Koushik'];
const oddName = oddFriend(friendList);
console.log(oddName);


