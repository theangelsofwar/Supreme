/**
 * Suppose we have a list of N numbers, and repeat the following operation until we're left with only a single number: Choose any two numbers and replace them with their sum. Moreover, we associate a penalty with each operation equal to the value of the new number, and call the penalty for the entire list as the sum of the penalties of each operation.
For example, given the list [1, 2, 3, 4, 5], we could choose 2 and 3 for the first operation, which would transform the list into [1, 5, 4, 5] and incur a penalty of 5. The goal in this problem is to find the worst possible penalty for a given input.
Signature:
int getTotalTime(int[] arr)
Input:
An array arr containing N integers, denoting the numbers in the list.
Output format:
An int representing the worst possible total penalty.
Constraints:
1 ≤ N ≤ 10^6
1 ≤ Ai ≤ 10^7, where *Ai denotes the ith initial element of an array.
The sum of values of N over all test cases will not exceed 5 * 10^6.
Example
arr = [4, 2, 1, 3]
output = 26
First, add 4 + 3 for a penalty of 7. Now the array is [7, 2, 1]
Add 7 + 2 for a penalty of 9. Now the array is [9, 1]
Add 9 + 1 for a penalty of 10. The penalties sum to 26.
 */

 // Add any extra import statements you may need here


// Add any helper functions you may need here
var startContext = false; 

function getTotalTime(arr) {
  // we want an innefficiency, therefore we want a maximum number of a. steps and b. cost per step, the aggregate will be the return  
  if(!arr || arr.length===0) {
    return 0;
  } else if(arr.length===1) {
    return 0;
  } else {
    if(!startContext) { 
      arr.sort();
      startContext = true;
    }
    console.log('line 21 arr is:', arr); //now that it's sorted, we only have to add the sum/map reduce until we reach the end 
    let localGasPrice = arr.pop();
    localGasPrice += arr.pop();
    //arr[arr.length-1] + arr[arr.length-2] + 0; //reassign variables, immutable arrays, //arr = arr.slice(0, arr.length-2);
    console.log('sliced arr before add other is', arr);
    arr.push(localGasPrice);
    return localGasPrice + getTotalTime(arr);
  }   
}

