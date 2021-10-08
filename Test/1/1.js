let a =[2,3,-5,-2,4];
let c = 0;
let max=0;
for (let d = 1; d<a.length; d++) {
  for (let i =0; i<a.length; i++) {
    let c = a[i] * a[d];
    if (c>max) { 
      max = c ; 
    }
    d++;
  }
}
console.log('Tích lớn nhất là', max);