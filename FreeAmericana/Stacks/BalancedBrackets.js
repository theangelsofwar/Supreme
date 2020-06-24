/**
 * @param input
 * @return boolean
 */

 const isBalanaced = (input) => {
   let brackets = "[]{}()";
   //"dictionary" string
   let stack = [];

   for(let i=0; i<input.length; i++){
     let bracket = input.charAt(i);
     let bracketIndex = brackets.indexOf(bracket);
     //even or odd determines the bracket is opening or closing
     if(bracketIndex%2 === 0){
       stack.push(bracketIndex+1);
     } else {
       //we have a closing bracket because it is an odd index, we must see if the stack top .pop() is corresponding closing
       if(stack.pop() !== bracketIndex){
         return false;
       }
     }
   }

   return stack.length === 0;
 };



 module.exports = isBalanced;