/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 * 
 * A car travels from a starting position to a destination which is target miles east of the starting position. 

Along the way, there are gas stations.  Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas.

The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it.  It uses 1 liter of gas per 1 mile that it drives.

When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.

What is the least number of refueling stops the car must make in order to reach its destination?  If it cannot reach the destination, return -1.

Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there.  If the car reaches the destination with 0 fuel left, it is still considered to have arrived.

Input: target = 1, startFuel = 1, stations = []
Output: 0
Explanation: We can reach the target without refueling.

Input: target = 100, startFuel = 1, stations = [[10,100]]
Output: -1
Explanation: We can't reach the target (or even the first gas station).

Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
Output: 2
Explanation: 
We start with 10 liters of fuel.
We drive to position 10, expending 10 liters of fuel.  We refuel from 0 liters to 60 liters of gas.
Then, we drive from position 10 to position 60 (expending 50 liters of fuel),
and refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.
We made 2 refueling stops along the way, so we return 2.
 */
var minRefuelStops = function(target, startFuel, stations) {
  //target number miles
  //let stops = [];

  //cutt out the middle stations we don't stop at

  //XOR eliminate the middle stops that aren't necessary/splice

  if(!stations || (stations.length === 0 && target > startFuel)){
    //not enough gas to target mileage
    return -1;
  }

  let result = 0;
  let milesRemaining = target;
  let gas = startFuel;
  //constraints: the miles from target/miles left and the gas available with stations in between
  for(let i=0; i < stations.length-1 && milesRemaining > 0; i++){

    //avoid inner looping, ensure that we can make it to the next station or exit, 
    
    //via conditional checks
    //thought experiment
    //dynamic program(similar to knapsack)
    let station = stations[i];
    let miles = station[0];
    let gasAvailable = station[1];

    //if this was a linked list, we could have multiple pointers
    let nextStation = stations[i+1];
    let nextMiles = nextStation[i+1];
    let nextGas = nextStation[i+1];
    //shortcircuit all potential conditions to not waste time
    //if the gas left in the inifinite tank will not make it to the next station, then refuel here. 
    if(gas < milesRemaining && gas < nextMiles){
      //if we cannot make the next station without refueling, label this gas station as a must
      result++;
      gas+=gasAvailable;
    }
    milesRemaining -= miles; //we have gone this far regardless

    //the minute we find infeasibility we will return a -1 immediately
    
  }
  
  //startFuel 1 liter/mile

  //sliding windo
  return result;
  //stations traverse
};

