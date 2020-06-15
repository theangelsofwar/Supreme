/**
 * A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
We consider two brackets to be matching if the first element is an open-bracket, e.g., (, {, or [, and the second bracket is a close-bracket of the same type, e.g., ( and ), [ and ], and { and } are the only pairs of matching brackets.
Furthermore, a sequence of brackets is said to be balanced if the following conditions are met:
The sequence is empty, or
The sequence is composed of two, non-empty, sequences both of which are balanced, or
The first and last brackets of the sequence are matching, and the portion of the sequence without the first and last elements is balanced.
You are given a string of brackets. Your task is to determine whether each sequence of brackets is balanced. If a string is balanced, return true, otherwise, return false
Signature
bool isBalanced(String s)
Input
String s with length between 1 and 1000
Output
A boolean representing if the string is balanced or not
Example 1
s = {[()]}
output: true
Example 2
s = {}()
output: true
Example 3
s = {(})
output: false
Example 4
s = )
output: false
 */

/ Add any extra import statements you may need here


// Add any helper functions you may need here

var mapBrackets = { "\{": "\}", "\(" : "\)", "\[" : "\]"};

function isBalanced(s) {

  if(!s || !s.length){
    //0 length is false
    return true;
  }
  else if(s.length===1){
    //the length is 1, there is not balance in the universe...
    return false;
  } else if(s.length%2===1){
    return false;
  } 
  let stack = [];
  for(let i=0; i<s.length; i++){
    let el = s[i];
    if(el in mapBrackets){
      //opener
      stack.push(el);
    } else {
      let stackTrace = stack.pop();
      if(mapBrackets[stackTrace] !== el) {
        return false; 
      }
    }
   
  }
  
  return true; 
  //it is actually a recursive call stack...depending on whether closing is approximate or enclosing of another, 
  
  
  
}
