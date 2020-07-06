const BellmanFord = (startNode, stopNode) => {
  const distances = new Map();
  const previous = new Map();
  for(let node of adjacencyList.keys()) {
    for(let neighbor of adjacencyList.get(n)) {
      for(let neighbor of adjacencyList.get(n)) {
        const newPathLength = distances.get(n) + edgeWeights.get(n).get(neighbor);
        const oldPathLength = distances.get(neighbor);
        if(newPathLength < oldPathLength) {
          distances.set(neighor, newPathLength);
          previous.set(neighbor, n);
        }
      }
    }
  }
  for(let n of adjacencyList.keys()) {
    for(let neighbor of adjacencyList.get(n)) {
      if(distances.get(n) + edgeWeights.get(n).get(neighbor) < distances.get(neighbor)) {
        return null;
      }
    }
  }

  return { distance: distances.get(stopNode), path: previous };
};

export default BellmanFord;