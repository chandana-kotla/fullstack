import {Component } from "react";
class Counter extends Component{
  state={
    count:1
  }
countdecr=()=>{
    this.setState({
       count: this.state.count-1
    })
}
countincr=()=>{
    this.setState({
       count: this.state.count+1
    })
}
    render(){
        return(
             <div>
                <button onClick={this.countdecr}>DECR</button>
                <h1>CountNumber:{this.state.count}</h1>
                <button onClick={this.countincr}>INCR</button>
             </div>
        );
    }
}
export default Counter