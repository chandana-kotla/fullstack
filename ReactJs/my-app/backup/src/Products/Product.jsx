import React, { Component } from 'react'
import { Axios } from 'axios';
class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
          console.log(response);
          this.setState({ users: response.data })
        })
        .catch(()=>{})
    }
  render() {
    return (
      
      <div>
        <div className="container">
            <div className="row">
                <pre>{JSON.stringify(this.state.products)}</pre>
            </div>
        </div>
      </div>
     
    )
  }
}

export default Product
