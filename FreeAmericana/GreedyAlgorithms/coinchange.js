/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var memo = {}; 
//carry the memo on its closure

var coinChange = function(coins, amount) {
    //coins is the "dictionary"
    if(!coins || !amount || amount===0){
        return 0;
    } 
    
    if(coins.length === 1 && amount%coins!==0){
        if(coins[0]===1){
            return amount;
        }
        //not divisible
        return -1;
    }
    
    let result = 0;
    
    if(memo.amount){
        //exists on map
        return memo.amount;
    } else {
        for(let i=0; i < coins.length; i++){
            let coin = coins[i]; //int
            if(amount-coin >= 0){
                result += 1 + coinChange(amount-coin); 
                //recursive callstack invoked
            }
            
        }
        //cache overlapping subproblems
        memo[amount] = result;
        return result;
    }
    
};