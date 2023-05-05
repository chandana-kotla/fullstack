import React, { Component } from 'react'

class Products extends Component {
    state={
        Nameprod:"Real me 20",
        price:19000,
        id:"RM20",
        quantity:1,
        image1:'https://th.bing.com/th/id/OIP.096zwC7tmk5AL7O2v90rXwHaIq?w=141&h=180&c=7&r=0&o=5&pid=1.7'   
    }
    incrHandler=()=>{
        this.setState({quantity : this.state.quantity+1})
    }
    decrHandler=()=>{
        this.setState({quantity : this.state.quantity-1})
    }
    
  render() {
    return (
        <div className='container'>
        {/* <div className="row">
        <div className="col-md-8"> */}
        <table className='table'>
            <thead className='bg-primary text-black'>
              <tr>
                <th>Name</th>
                <th>image</th>
                <th>Id</th>
                <th>Quantity</th>
                <th>price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{this.state.Nameprod}</td>
                  <td><img src={this.state.image1} height="80px"/></td>
                  <td>{this.state.id}</td>
                  <td><i onClick={this.decrHandler} className='fa fa-minus-circle'></i>{this.state.quantity}<i onClick={this.incrHandler} className='fa fa-plus-circle'></i></td>
                  <td>{this.state.price}</td>
                  <td>{this.state.price * this.state.quantity}</td>
              </tr>
            </tbody>
        </table>
      </div>
    //   </div>
    //   </div>
    )
  }
}

export default Products
