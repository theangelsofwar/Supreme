/**
 * N cities 1...N
 * connections[i] = [city1, city2, ...] edges/junctions
 * //index i is the city, and the value is the cost 
 * bidirectional connections(mutual between city trips, or round trip)
 * 
 * return min cost 
 *  */ 
// Ex 1. 
//      [1]
//     /   \
//    6     5
//   /       \
// [3] - 1 - [2]
//
// Input: N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
// Output: 6
// Explanation:
// Choosing any 2 edges will connect all cities so we choose the minimum 2.
//
// Example 2:
//
// [1] - 3 - [2]
// [3] - 4 - [4]
//
// Input: N = 4, connections = [[1,2,3],[3,4,4]]
// Output: -1
// Explanation:
// There is no way to connect all cities even if all edges are used.
//
// Note:
//
// 1 <= N <= 10000
// 1 <= connections.length <= 10000
// 1 <= connections[i][0], connections[i][1] <= N
// 0 <= connections[i][2] <= 10^5
// connections[i][0] != connections[i][1]

/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */


 const ConnectingCities = (n, connections) => {
   const parents = {};

   for(let i=0; i < n; i++){
     parents[i] = i;
   }

   const find = (u) => {
     if(u===parents[u]) return u;

     return parents[u] = find(parents[u]);
   };

   const union = (u, v) => {
     const p1 = find(u);
     const p2 = find(v);

     if(p1 !==p2) {
       parents[p1] = p2;
       n--;
     }
   };

   connections.sort((a, b) => a[2] - b[2]);

   let result = 0;
   for(const [u, v, cost] of connections) {
     if(find(u) !== find(v)) {
       union(u, v);
       result += cost;
     }
   }
   return n === 1 ? result : -1;
 };



 const minimumCost = (n, connections) => {
   const parents = {};

   const find = (u) => {
     if(parents[u] === null) {
       parents[u] = u;
     } else if (parents[u] !== u) {
       parents[u] = find(parents[u]); 
     }

     return parents[u];
    };

    const union = (u, v) => {
      const p1 = find(u);
      const p2 = find(v);


      if(p1 !== p2) {
        parents[p1] = p2;
        n--;
      }
    }

    connections.sort((a, b) => a[2] - b[2]);
    let result = 0;

    for(const [u, v, cost] of connections) {
      if(find(u) !== find(v)){
        union(u, v);
        result += cost;
      }
    }

    return n === 1 ? res : -1;
 };

 export default ConnectingCities;