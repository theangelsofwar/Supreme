const DFS = (startNode, stopNode) => {
  const previous = new Map();

  let shortestDistance = -1;

  //create inner closure function
  const dfs = (currentNode, depth) => {
    if(currentNode === stopNode) {
      shortestDistance = depth; 
    } else {
      for(let neighbor of adjacencyList.get(currentNode)) {
        previous.set(neighbor, currentNode);
        dfs(neighbor, depth+1);
      }
    }
  };

  dfs(startNode, 0);
  return { shortestDistance, previous };
};


export default DFS;