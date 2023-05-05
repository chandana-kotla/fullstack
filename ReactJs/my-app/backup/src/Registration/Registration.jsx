import React, { Component } from 'react'

class Registration extends Component {
    state={
        firstname:"",
        lastname:" ",
        mobilenum:" ",
        email:" ",
        gender:"",
        Dob:" ",
        state:"A",
        terms:" "
    }
    updateHandler=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        //sending data to backed apis
        //we are consuming api
    }
    btnhandler=(event)=>{
        this.setState({
            [event.target.firstname]:" ",
        })
    }
  render() {
    return (
      <div>
        <h1>Registration</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form action="" onSubmit={this.submitHandler}>
            <label htmlFor="">First Name:</label> 
            <input type="text" name='firstname' onChange={this.updateHandler} /><br /><br />
            <label htmlFor="">Last Name:</label>
            <input type="text" name='lastname' onChange={this.updateHandler}/>
            <br /><br />
            <label htmlFor="">Mobile Num:</label>
            <input type="text" name='mobilenum'onChange={this.updateHandler}/>
            <br /><br />
            <label htmlFor="">Email Id:</label>
            <input type="text" name='email' onChange={this.updateHandler}/>
            <br /><br />
            <label htmlFor="">Gender: </label> <label htmlFor="">Male </label>
            <input type="radio" name='gender'onChange={this.updateHandler}/>
           
            <label htmlFor="">Female </label>
            <input type="radio" name='gender'onChange={this.updateHandler}/>
            <br /> <br/>
            <label htmlFor="">Date of Birth:</label>
            <input type="Date" name='Dob' onChange={this.updateHandler}/>
            <br /> <br />
            <label htmlFor="">state:</label>
            <select name="state" id="" value={this.state.selectValue}  onChange={this.updateHandler}>
                <option value="Andhra pradesh">Andhra pradesh</option>
                <option value="TamilNadu">TamilNadu</option>
                <option value="karnataka">karnataka</option>
                <option value="Arunachal pradesh">Arunachal pradesh</option>
                <option value="Madhya pradesh">Madhya pradesh</option>
                <option value="odisa">odisa</option>
                <option value="haryana">haryana</option>
                <option value="Rajastan">Rajastan</option>
                <option value="Kerala">Kerala</option>
                <option value="jammu and kashmir">jammu and kashmir</option>
            </select>
             <br /><br />
            <input type="checkbox" name='terms' onChange={this.updateHandler}/>
            <label htmlFor="">Please accept terms and conditions</label><br /><br />
            
            <input type="submit" value='Registration' /> 
            {/* <input type="submit" value='Reset'onClick={this.btnhandler}/> */}
            

        </form>
      </div>
    )
  }
}

export default Registration
