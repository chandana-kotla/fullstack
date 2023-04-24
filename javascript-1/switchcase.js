var user="testprop";
switch(user){
      case "admin":
        console.log("you have full access");
    //   break;
      case "subadmin":
        console.log("you have create/delete access");
    //   break;
      case "testprop":
        console.log("you have create/delete test access");
    //   break;
      case "user":
        console.log("you have access to consume content");
    //   break;
      default:
        console.log("nothing");
        break;
}