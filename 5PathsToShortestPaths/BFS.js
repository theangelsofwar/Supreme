const BFS = (startNode, stopNode) => {
  const previous = new Map();
  const visited = new Set();
  const queue = [];

  queue.push({ node: startNode, dist: 0 });

  visited.add(startNode);

  while(queue.length > 0) {
    const { node, dist } = queue.shift();

    if(node === stopNode) return { shortestDistance: dist, previous };

    for(let neightbor of adjacencyList.get(node)) {
      if (!visited.has(neighbor)) {
        previous.set(neighbor, node);
        queue.push({ node: neighbor, dist: dist+1 });
        visited.add(neighbor);
      }
    }
  }

  return { shortestDistance: -1, previous };

};



export default BFS;