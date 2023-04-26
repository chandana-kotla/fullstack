var user={
    username:"chandana",
    email:"chandu@134.com",
    empid:546,
    branch:"software",
    role:"admin",
    courselist:[],
    buycourse:function(coursename){
        this.courselist.push(coursename);
    },
    getcoursecount:function(){
        return `${this.username} was enrolled in ${this.courselist.length} courses`;
    },
};
// we can access object in two ways
// console.log(user.branch);
// console.log(user["role"]);
// console.log(user);
// console.table(user);
var courselist=true;
user.buycourse("React js");
user.buycourse("vyu js");
user.buycourse("angular js");
console.log(user.getcoursecount())