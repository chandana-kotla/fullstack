import React, { Component } from 'react'

class Message extends Component {
    state={
        Msg:"this is day"
    }
    updateday=(value)=>{
        this.setState({Msg:value});
    }
  render() {
    return (
      <div>
        <h2>{this.state.Msg}</h2>
        <button onClick={this.updateday.bind(this,"this is mrng")}>Gud Mrng</button>
        <button onClick={this.updateday.bind(this,"this is afternoon")}>Gud Afternoon</button>
        <button onClick={this.updateday.bind(this,"this is Evng")}>Gud Evng</button>
        <button onClick={this.updateday.bind(this,"this is Night")}>Gud Night</button>
        <button onClick={this.updateday.bind(this,"this is mid night")}>Mid Night</button>
      </div>
    )
  }
}

export default Message
