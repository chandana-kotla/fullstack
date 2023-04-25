import React, { Component } from 'react'

class Salary extends Component {
    state={
        salarynow:25000
    }
    updatesalarynow=(amount)=>{
        this.setState({
            salarynow:this.state.salarynow+amount
        })
    }
  render() {
    return (
      <div>
        <h1>salary:{this.state.salarynow}</h1>
        <button onClick={this.updatesalarynow.bind(this,20000)} >Hike 20k</button><br></br>
        <br></br>
        <button onClick={this.updatesalarynow.bind(this,45000)}>Hike 45k</button>
        <br></br>
        <br></br>
        <button onClick={this.updatesalarynow.bind(this,90000)}>Hike 90k</button>
        <br></br>

      </div>
    )
  }
}

export default Salary
