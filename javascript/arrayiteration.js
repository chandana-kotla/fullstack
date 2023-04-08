let cof=["priya","krishna","keerthi","dharani","trinath","lahari","harihara","vamsi"];
// for each
// cof.forEach(element => {
//     console.log(element)
// });

// // for of
// for(let element of cof){
//     console.log(element)
// }

// // for in
// for(let element in cof){
//     console.log(cof[element])
// }

// for
// for(let i=0;i<cof.length;i++){
//     console.log(cof[i])
// }

// map
cof.map((value,index,cof)=>{
      console.log(value,index)
})

// filter
let numbers=[45,6,98,23,56,17]
let r=numbers.filter((a)=>{
return a<30
})
console.log(r)

// reduce
let pree=[1,4,2,7,5,9];
let t=pree.reduce((h1,h2)=>{
    return h1+h2
})
console.log(t)

// find
let pree1=[1,4,2,7,5,9];
let e=pree1.find((y)=>{
    return y>6;
})
console.log(e)