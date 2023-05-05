import { Component } from "react";
class Statemsg extends Component{
    state={
        msg:"Hello Chotu"
    }

getHandler=()=>{
     this.setState({
        msg:"Good mrng chotu"
     })
}
getHandler1=()=>{
    this.setState({
       msg:"Good night chotu"
    })
}
    render(){
        return (
        <div>
             <h3>Message Value:{this.state.msg}</h3>
            <button onClick={this.getHandler}>GM</button>
            <button onClick={this.getHandler1}>GN</button>
        </div>
        );
    }
}
export default Statemsg