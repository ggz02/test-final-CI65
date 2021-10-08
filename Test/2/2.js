let a = 0;
let b =0;
let teamA = [];
let teamB = [];
function alternatingSums (arr) {
 for (let i = 0; i<arr.length; i++) {
   if ( i%2 === 0) {
     teamA = teamA  +', '+ arr[i];
      a = a + arr[i];
    }
    else if ( i% 2 !== 0) {
      teamB = teamB +', '+ arr[i];
      b = b + arr[i];
    }
  }
  console.log (a,b);
}

alternatingSums ([60, 40, 55, 75, 64]);
