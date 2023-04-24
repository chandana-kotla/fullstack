function myName(name){
    console.log(`Hello there ${name}`);
}
myName("chandana");

function namastey(){
    return "Hello pups";
}
console.log(namastey())

var getuser=function (user,role){
  switch(role){
    case "admin":
        return `${user} this is admin role`;
        break;
    case "subadmin":
        return `${user} this is subadmin role`;
        break;
    case "tester":
        return `${user} this is the tester role`;
        break;
        default:
            return `${user} this is the test prep role`;
  }
} 

console.log(getuser("chandu","admin"));