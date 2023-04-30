import React, { Component } from 'react'
import Axios  from 'axios'
class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({posts:response.data})
            console.log(response.data)
        })
        .catch(()=>{})
    }

  render() {
    return (
      <div className='.container'>
        <div className='.row'>
        <pre>{JSON.stringify(this.state.posts)}</pre>
        <div className='col-md-8'>
            <table className='table table-hover'>
                <thead className='bg-dark text-white'>
                   <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Body</th>
                    <th>Title</th>
                   </tr>
                </thead>
                <tbody>
                    {
                   this.state.posts.map((post1,i)=>{
                    return <tr key={i}>
                        <td>{post1.userId}</td>
                        <td>{post1.id}</td>
                        <td>{post1.body}</td>
                        <td>{post1.title}</td>
                    </tr>
                   })
                    }
                </tbody>
            </table>
        </div>

        </div>
      </div>
    )
  }
}

export default Post
