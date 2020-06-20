/*
 Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges. 


  { startTime: 2, endTime: 3 }  meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  meeting from 12:00 – 1:30 pm

[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
] -> [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12}
]



[0,1] [3,5] [4,8] [9,10] [10,12]

[0,1] [3,8] 12

*/

class range{
  constructor(start, end) {
    this.startTime = start;
    this.endTime = end;
  }
 }
 
 //many people's schedule
 // meetings[i] = { start: "", end: ""}
 //@return result [{star:"", end: "" }]
 function mergeRanges(meetings){
   let result = [];
 
   //- 0 +
   meetings.sort((el1, el2) => { return el1.startTime-el2.startTime; });
   //start times will retain the chronological order
 
   console.log('meetings',meetings);
 
   let start = meetings[0].startTime;
   let end = meetings[0].endTime;
   for(let i=1; i<meetings.length; i++){
     let el = meetings[i];
     let currStart = el.startTime;
     let currEnd = el.endTime;
     //currStart>=start
     if(currStart > end) {
       result.push(new range(start,end));
       start = currStart;
       end = currEnd;
     }
     else if(currEnd > end ){
       end = currEnd;
     }
   }
   //add last one
   result.push(new range(start,end));
 
   return result;
 }
 
 const meetingsArr = [
   { startTime: 0,  endTime: 1 },
   { startTime: 3,  endTime: 5 },
   { startTime: 4,  endTime: 8 },
   { startTime: 10, endTime: 12 },
   { startTime: 9,  endTime: 10 },
 ];
 
 console.log(mergeRanges(meetingsArr));