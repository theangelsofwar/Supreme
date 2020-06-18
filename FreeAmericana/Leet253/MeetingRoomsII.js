/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
 * find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.


Spacebook, Erase Your Social, Alpha
 */
/**
 * 
 * @param {*} Array [int] timeslots 
 */
 const MeetingRooms = (timeslots) => {


  //find the number of OVERLAPPING itervals...
  //since the non overlapping intervals can host meetings in the same room, the minimum will be the intervals that do overlap

  //first we sort the timeslots based on start time,
  timeslots.sort()
  timeslots.sort((a, b) => { return a[0] })

  //now we check where intervals merge and track the frequencies

  let result = 0;


  result++;



  return result; 


 }

 export default MeetingRooms;