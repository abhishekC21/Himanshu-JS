// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// matrix.forEach((insideArray) => {
//     insideArray.forEach((element) => {
//         console.log(element);
//   });
// });

// let matrix = [
//   /* n */
//   [0, 0, -1] /* m */,
//   [0, -1, 0],
//   [0, 0, 0],
// ];

// m = no. rows
// n = no. of columns
// bombExplode(matrix, matrix.length, matrix[0].length);
// bombExplode(matrix, m, n);
// matrix.forEach((inside) => console.log(inside));
// function bombExplode(matrix, m, n) {
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === -1) {
//         if (j > 0 && matrix[i][j - 1] !== -1) {
//           matrix[i][j - 1] += 1;
//         }

//         if (j < n - 1 && matrix[i][j + 1] !== -1) {
//           matrix[i][j + 1] += 1;
//         }

//         if (i > 0 && matrix[i - 1][j] !== -1) {
//           matrix[i - 1][j] += 1;
//         }

//         if (i < m - 1 && matrix[i + 1][j] !== -1) {
//           matrix[i + 1][j] += 1;
//         }
//       }
//     }
//   }
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// transpose(matrix, 3);
// matrix.forEach((inside) => console.log(inside));
// function transpose(matrix, n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function waveForm(matrix, n, m) {
//   let forward = true;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (forward) {
//         console.log(matrix[i][j]);
//       } else {
//         console.log(matrix[i][m - j - 1]);
//       }
//     }
//     forward = !forward;
//   }
// }
// waveForm(matrix, 3, 3);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// rotate90(matrix, 3);
// matrix.forEach((inside) => console.log(inside));
// function rotate90(matrix, n) {
//   for (let i = 0; i < n / 2; i++) {
//     for (let j = i; j < n - i - 1; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[n - j - 1][i];
//       matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
//       matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
//       matrix[j][n - i - 1] = temp;
//     }
//   }
// }

///////////////////////////////////////////////////////////////

// Amit_R_Thakur00:11
// const A = [
//   [1, 0, 0, 0],
//   [0, 2, 0, 0],
//   [0, 0, 3, 0],
//   [0, 0, 0, 4],
// ];

// Printing Array
// let r, c;
// for(r=0;r<A.length;r++){
//     for(c=0;c<A[r].length;c++){
//         console.log(`(${r},${c})=:${A[r][c]}`)
//     }
// }

// A.map((e,i)=>{
//     // console.log(e)
//     e.map((e2,i2)=>{
//         // console.log(e2)
//         console.log(`(${i},${i2})=:${e2}`)

//     })
// })
// const arr=[11,12,13,14,15]
// arr.map((r,i)=>{
//     console.log(r)
// })

//Logic fUnction to verif

///////////////////////////////////////////////////

// for (i = 0; i < a1.length; i++) {
//     for (j = 0; j < a2.length; j++) {
//         a4[i][j] = a1[i][j] + a2[i][k] ;
//     }
//   }
//   Amit Thakur23:24
//   rejoin krr
//   Amit Thakur00:10
//   priti ji boliye kuch?
//   Amit Thakur00:22
//   for(let i=0;i<sprMtrx.length;i++){
//     for(j=0;j<sprMtrx[i].length;j++){
//       console.log(sprMtrx[i][j])
//       if(j==sprMtrx[i].length-1){
//         i++
//         while(i<sprMtrx.length){
//           console.log(sprMtrx[i][j])
//           i++
//         }
//         i--;
//         j--;
//         while(j!=-1){
//           console.log(sprMtrx[i][j])
//           j--
//         }
//         j++
//         for(let k=j;k<sprMtrx[i-1].length-1;k++){
//           console.log(sprMtrx[i-1][k])

//         }
//         break
//       }
//     }
//   }
