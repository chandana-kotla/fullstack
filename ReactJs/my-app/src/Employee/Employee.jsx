import React, { Component } from 'react'

class Employee extends Component {
    employee=[{id:1,fullname:"chandana",salary:4500},
    {id:2,fullname:"keerthi",salary:5500},
    {id:3,fullname:"Harihara",salary:6500},
    {id:1,fullname:"Harika",salary:7500}
]
  render() {
    return (
      <React.Fragment>
          <table border={3}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.employee.map((emp)=>{
                       return <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.Fullname}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    })
                }
            </tbody>
          </table>
      </React.Fragment> 
    )
  }
}

export default Employee
