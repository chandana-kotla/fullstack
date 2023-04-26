var iseven=(element)=>{
    //  if(element % 2 ===0){
    //     console.log("even");
    //  }else{
    //     console.log("odd");
    //  }
    return element % 2 ===0;
}
var result=[2,6,8,4].every(iseven);
console.log(result);