const Dijkstra = (startNode, stopNode) => {
  const distances = new Map();
  const previous = new Map();
  const remaining = createPriorityQueue(n => distances.get(n));

  for(let node of adjacencyList.keys()) {
    distances.set(node, Number.MAX_VALUE);
    remaining.insert(node);
  }
  distances.set(startNode, 0);

  while(!remaining.isEmpty()) {
    const n = remaining.extractMin();
    for(let neighbor of adjacencyList.get(n)) {
      const newPathLength = distances.get(n) + edgeWeights.get(n).get(neighbor);
      const oldPathLength = distances.get(neighbor);
      if(newPathLength < oldPathLength) {
        distances.set(neighbor, newPathLength);
        previous.set(neighbor, n);
      }
    }
  }

  return { distance: distances.get(stopNode), path: previous };
};


export default Dijkstra;