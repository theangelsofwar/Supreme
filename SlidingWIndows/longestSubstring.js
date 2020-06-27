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
   let rightWindow = 0;
   while(rightWindow < str.length){
     if(!counts[str[rightWindow]]){
       //not in map yet, initiate
       counts[str[rightWindow]] = 0;
     }

     //increment map
     counts[str[rightWindow]] += 1;

     if(Object.values(counts).some(element => element > 1)) {
       counts[str[leftWindow]] -= 1;
       leftWindow += 1;
     }

     longest = Math.max(longest, rightWindow - leftWindow +1);
     rightWindow += 1;
   }

   return longest;
 };


 export default longestSubstring;
