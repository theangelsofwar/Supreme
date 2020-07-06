const BiDirectional = (startNode, stopNode) => {
  const previous = new Map();
  const visited1 = new Map();
  const visited2 = new Map();

  const queue1 = [];
  const queue2 = [];

  queue1.push({ node: startNode, dist: 0 });
  queue2.push({ node: stopNode, dist: 0 });
  visited1.set(startNode, 0);
  visited2.set(stopNode, 0);

  while(queue1.length > 0 || queue2.length > 0) {
    if(queue1.length > 0) {
      const { node, dist } = queue1.shift();
      if(visited2.has(node)) {
        return {
          shortestDistance: dist + visited2.get(node),
          previous,
        };
      }

      for(let neighbor of adjacencyList.get(node)) {
        if(!visited1.has(neighbor)) {
          previous.set(neighbor, node);
          queue1.push({ node: neighbor, dist: dist+1 });
          visited1.set(neighbor, dist+1);
        }
      }
    }

    if(queue2.length > 0) {
      const { node, dist } = queue2.shift();
      if(visited1.has(node)) {
        return {
          shortestDistance: dist + visited1.get(node),
          previous,
        };
      }

      for(let neighbor of adjacencyList.get(node)) {
        if(!visited2.has(neighbor)) {
          previous.set(node, neighbor);
          queue2.push({ node: neighbor, dist: dist+1 });
          visited2.set(neighbor, dist+1);
        }
      }
    }
  }

  return { shortestDistnace: -1, previous };

};


export const BiDirectional;