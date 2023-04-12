// problem 1
// let ar=[4,90,34,52,32];
// let inf=prompt("Enter a number");
// a=Number.parseInt(inf);
// ar.push(a)
// console.log(ar)

// problem 2
// let ty=[3,12,43,51,76,2];
// do{
// let h=prompt("Enter a number");
// a=Number.parseInt(h);
// ty.push(a)
// }
// while(a!=0){
//     console.log(ty);
// }

// the above code does not work in vs code use replit.com
// prob 3
let div10=[34,70,86,90,20];
let gh=div10.filter((d)=>{
return d%10==0;
})
console.log(gh)
// problem 4
let fg=div10.map((h)=>{
 return h*h;
})
console.log(fg)
// problem 5
let rt=[23,4,6,82,9,5];
let t=rt.reduce((h1,h2)=>{
    return h1*h2
})
console.log(t)