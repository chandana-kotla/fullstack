import React from "react";
class Developer extends React.Component {
     intro = () => document.write("My Name is ", this.props.fullName);
   
    render(){
     return <button onClick = {this.intro}>click me</button>
    }
   }
export default Developer