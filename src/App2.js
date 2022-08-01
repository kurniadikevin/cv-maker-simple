import React from "react";
import Display from "./component/display";


class App2 extends React.Component {
  
    constructor(){
        super();
        
        this.state={
            update : {
              name :  '',
              email : '',
              phone : '',
              education :  '',
              schoolName : '',
              schoolYear : '',
              experience :  '',
              fromYear : '',
              toYear : '',},
            
            submit : {}
            
            }

         
    }
    
    handleChange = (ev) =>{
        const value = ev.target.value;
        this.setState((prevState) => ({
          update : {
            ...prevState.update,
            [ev.target.name] : value
          } 
         })
        )
    }

    handleSubmit = (e) =>{
       e.preventDefault();
       this.setState({
         submit : this.state.update
       })
    }



  render(){

    const { name,email,phone,education,schoolName,schoolYear,experience,fromYear,toYear} = this.state.submit;

  return (
    <div>
      <div className="input-col">
          <h1>CV Application</h1>
         
          <div className="a-section">
              <form>
              <label>Name </label>
              <input name='name' type='text' onChange={this.handleChange}></input> <br></br>
              <label>Email </label>
              <input name='email' type="email" onChange={this.handleChange}></input><br></br>
              <label>Phone </label>
              <input name='phone'type="number" onChange={this.handleChange}></input>
              </form>
          </div>

          <div className="b-section">
            <form>
              <label>Education</label>
              <input name='education' type="text" onChange={this.handleChange}></input><br></br>
              <label>School Name</label>
              <input name='schoolName' type="text" onChange={this.handleChange}></input><br></br>
              <label>Year</label>
              <input name='schoolYear' type="number" onChange={this.handleChange}></input><br></br>
            </form>
          </div>

        <div className="c-section">
              <form>
                  <label>Experience</label>
                  <input name='experience' type="text" onChange={this.handleChange}></input><br></br>
                  <label>From</label>
                  <input name='fromYear' type="month" onChange={this.handleChange}></input>
                  <label>To</label>
                  <input name='toYear' type='month' onChange={this.handleChange}></input>
              </form>
         </div>
         <button onClick={this.handleSubmit}>Submit</button>
      </div>

      <div className="display-col">
          <Display name={name} email={email} schoolName={schoolName} />
      </div>
      
      
    </div>
  );
}
}

export default App2;
