//             if(isCircuit) {
//                 count++; 
//                 //this accounts for only 1 additional minute of spread affecting spread of up to four times of a potential factor
//                 //reset the circuit

//                 isCircuit = false; 
//             }
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  //BFS
  //mutate the matrix, entire state
  let count = -1;
  
  //array method join
  let stringGrid = '' + grid.join(', ');
  //now string method prototype chain
  
  stringGrid = stringGrid.trim(', ');
  
  //strings are immuatable, unlike the virus...
  
  stringGrid = stringGrid.trim('\n');
  console.log(stringGrid);
  //corner case: if there are no 1s short circuit
  if(stringGrid.indexOf('1') === -1){
      //none present
      return 0;
  }
  if(stringGrid.indexOf('2') === -1){
      //no virus
      return -1;
  }
  
  //check corner cases: as in, if there are 1s in either corner with adjacent zeros, we can return -1
  
  let isStatusDone = false; 
  let countStillHuman = 0;
  const state = []; 
  const nextState = [];
  //BFS Queue, call it state
  //travserse 1/4 of the matrix and do checks for the four corresponding parallels(non symmetrically, only decreases runtime by a constant (1/4) but still asymptotically On^2)
  
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
          let el = grid[i][j];
          //let isCircuit = false;
          switch(el) {
              case 0:
                  //a 0 cannot infect
                  //isCircuit is still false
                  break;
              case 1:
                  //a 1 has the potential to infect if they violate social distancing
                  //we can shortcircuit here if there is no potential of infection, 
                  
                  countStillHuman++;
                  break;
              case 2:
                  //isCircuit = true;
                  //2 is the virus
                  //check bounds, inclusive ifs checkall
                  state.push([i, j]);
                  break;
              default:
          }
      }
  }
  
  if(countStillHuman === 0){
      return 0;
  }
  if(state.length === 0){
      return -1;
  }
  
  //use BFS
  while(state.length) {
      let size = state.length; //we want two pointers within itself, so we only increment a single minute
      while(size > 0){
          let position = state.shift();
          let i = position[0];
          let j = position[1];
          //invoke viral infections
          infectOthers(state, i, j);
          size--;
      }
      count++;
  }
  
  //this function will be hoisted to above when invoked, closure
  function infectOthers(state, i, j) {
      //use of closure, context, scope
      
      //push to the state stack the new infected so it can further the spread of the virus
      
      if(i+1 < grid.length && grid[i+1][j] === 1) {
          grid[i+1][j] = 2;
          state.push([i+1, j]);
          countStillHuman--;
      }
      if(i-1>= 0 && grid[i-1][j] === 1) {
          //we can infect surfaces(0s) but they cannot further the spread and we assume less mobility of cells
          grid[i-1][j] = 2;
          state.push([i-1, j]);
          countStillHuman--;
      }
      if(j+1 < grid[i].length && grid[i][j+1] === 1) {
          grid[i][j+1] = 2;
          state.push([i, j+1]);
          countStillHuman--;
      }
      if(j-1 >= 0 && grid[i][j-1] === 1) {
          grid[i][j-1] = 2;
          state.push([i, j-1]);
          countStillHuman--;
      }
      
      console.log(grid);
  }
  
  
  if(countStillHuman > 0){
      //some are immune, uninfectable
      return -1;
  }
  
  
  return count;
};