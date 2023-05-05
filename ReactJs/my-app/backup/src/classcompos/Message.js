import React ,{Component} from 'react'
class Message extends Component{
    msg="Hello";
    getHandler=()=>{
        this.msg="Hello ,GOOD MRNG";
        this.forceUpdate()
    }
    render(){
      return(
        <div>
            <h3>This is a message:{this.msg}</h3>
            <button onClick={this.getHandler}>GUD MRNG</button>
        </div>
      )
    }
}
export default Message