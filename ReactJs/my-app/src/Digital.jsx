import React, { Component } from 'react'

class Digital extends Component {
    state={
        ct:new Date().toLocaleTimeString()
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                ct:new Date().toLocaleTimeString()
            })
        },1000)
    }
  render() {
    return (
      <div>
        <h2>{this.state.ct}</h2>
      </div>
    )
  }
}

export default Digital
