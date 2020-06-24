/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number} number of ways(permutations) to make change
 */

var memo = {}; 

//carry the memo on its closure

var coinChange = function(coins, amount) {

  //coins is the "dictionary"
  if(!coins || !amount || amount===0){
      return 0;
  } 
  
  // if(coins.length === 1 && coins[0] ===1){
  //     return amount;
  // }
  if(coins.length === 1 && amount%(coins[0]) !== 0){  
      //not divisible
      return -1;
  }
  
  let result = 0;
  
  if(memo.amount){
      //exists on map
      return memo.amount;
  } 
  else {
      for(let i=0; i < coins.length; i++){
          let coin = coins[i]; 
          if(amount-coin >= 0){
              result += coinChange(coins, amount-coin) + 1; 
              //recursive callstack invoked
          }
      }
      //cache overlapping subproblems
  }
  memo[amount] = result;
  
  return result;

  
};