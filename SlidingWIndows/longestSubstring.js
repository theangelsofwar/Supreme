/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Strings: contiguous array of chars
 */

//return the string
//we could also trim off the duplicates...
/**
 * 
 * @param {*} str string
 * @return {*} longest string
 */
 const longestSubstring = (str) => {
   let leftWindow = 0;
   let counts = {};
   let longest = "";


   //alternative, slide the window on left
   let rightWindow = str.length;
   while(leftWindow < rightWindow){

   }
   return longest;
 };


 export default longestSubstring;
