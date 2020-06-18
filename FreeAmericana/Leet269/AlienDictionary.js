/**
 * There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".

Example 2:
Given the following words in dictionary,

[
  "z",
  "x"
]
The correct order is: "zx".

Example 3:
Given the following words in dictionary,

[
  "z",
  "x",
  "z"
]
The order is invalid, so return "".

Note:
You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
 */

 /**
  * 
  * @param {*} String [] dictionary
  * @return {*} String 
  */
 const AlienDictionary = (dictionary) => {
   //prefix trie
   let trie = {}; //map 
   //priority queue
   let priorityQueue = [];
   //sliding window
   let result = "";

   for(let i=0; i<dictionary.length; i++) {
     let el = dictionary[i]; //string in this order

     //iterate string for overlap on the currently established "trie" prefix, order,
     //if merge add between chars, 
     //priority queue for the frequency of repeating chars in a string taking precendence

     //the resultant trie will be the entire "alien alphabet"
   }


   return result; 
 }

 export default AlienDictionary;