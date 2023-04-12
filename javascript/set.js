const letters=new Set(["apple","banana","carrot"]);
// or we can create an empty set and add values
const term=new Set()
term.add("van");
term.add("bus");
term.add("ship");
  
console.log(letters)
console.log(term)

let rm="";
// letters.forEach(function(value){
//     rm+=value;
// })

for(const x of letters.values()){
    rm+=x;
}
console.log(rm)