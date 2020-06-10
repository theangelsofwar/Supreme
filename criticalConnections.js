//fuck the system

//let's go total anarchy


//Leet #1192

// There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.
// A critical connection is a connection that, if removed, will make some server unable to reach some other server.
// Return all critical connections in the network in any order.
//
// Example 1:
//
//            2
//           / \
//          1 - 0
// critical |
//          3
//
// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.
//
// Constraints:
//
// 1 <= n <= 10^5
// n-1 <= connections.length <= 10^5
// connections[i][0] != connections[i][1]
// There are no repeated connections.

/** Tarjan's strongly connected components algorithm */
// Introduction to Tarjan's strongly connected components algorithm
// https://www.youtube.com/watch?v=TyWtx7q2D7Y
//
// Time O(V + E)

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  if(n===0 || connections == null || connections.length === 0){
      return [];
  }
  
  const graph = [];
  for(let i=0; i<n; i++){
      graph.push([]);
      //build 2d graph array
  }
  
  for(const [u, v] of connections){
      graph[u].push(v);
      graph[v].push(u);
  }
  let time=0; //time when discover network
  const res = [];
  const low = [];//local minima
  const discovery = []; //discoverytime
  
  for(let i=0; i<n; i++){
      discovery.push(Infinity);
  }
  
  //DFS
  const dfs = (u, prev) => {
      discovery[u] = low[u] = time++; //discover u
      for(const v of graph[u]){
          if(v === prev){
              continue;
          }
          if(discovery[v] === Infinity){
              dfs(v,u);
              low[u] = Math.min(low[u], low[v]);
              if(low[v] > discovery[u]){
                  res.push([u,v]);
              }
          } else {
              low[u] = Math.min(low[u], discovery[v]);
          }
      }
  };
  
  dfs(0, -1);
  return res;

};