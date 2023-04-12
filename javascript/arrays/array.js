// let cars=[10,20,30,40,50]
// let new_car=[cars]
// for(car of cars){
//     console.log(car)
// }
// console.log(new_car)
let crave=["attaractive","habit","invisible","unsatisfy"];
console.log(crave)
console.log(crave[0])
crave[2]="visible"
console.log(crave)
console.log(crave.length)
let x='<ul>'
for(let i=0;i<crave.length;i++){
x+="<li>"+crave[i]+"</li>"+"<br>"
}
x+="</ul>";
console.log(x)
// Adding new elements to an array
crave.push("makesatisfy")
// crave[8]="makes holes"
console.log(crave)
console.log(typeof(crave))
console.log(Array.isArray(crave))
console.log(crave instanceof Array)