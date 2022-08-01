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
    <div className='App'>
      <div className="input-col">
          <h1>CV Application</h1>
         
          <div className="a-section">
              <form>
               <div>
                  <label>Name </label>
                  <input name='name' type='text' onChange={this.handleChange}></input> 
              </div>
              <div>
                  <label>Email </label>
                  <input name='email' type="email" onChange={this.handleChange}></input>
              </div>
              <div>
                  <label>Phone </label>
                  <input name='phone'type="number" onChange={this.handleChange}></input>
              </div>
              </form>
              
          </div>

          <div className="b-section">
            <form>
              <div>
                  <label>Education</label>
                  <input name='education' type="text" onChange={this.handleChange}></input>
              </div>
              <div>
                  <label>School Name</label>
                  <input name='schoolName' type="text" onChange={this.handleChange}></input>
              </div>
              <div>  
                  <label>Year</label>
                  <input name='schoolYear' type="number" onChange={this.handleChange}></input>
              </div>
            </form>
                
          </div>

        <div className="c-section">
              <form>
                <div>
                    <label>Experience</label>
                    <textarea rows='15' cols='50' id='exp-input'name='experience' type="text" onChange={this.handleChange}></textarea>
                </div>
                <div>
                  <div>
                    <label>From</label>
                    <input id='fromto-input'name='fromYear' type="number" onChange={this.handleChange}></input>
                  </div>
                  <div>
                    <label>To</label>
                    <input id='fromto-input'name='toYear' type='number' onChange={this.handleChange}></input>
                  </div>
                </div>  
              </form>
         </div>
         <div>
              <button onClick={this.handleSubmit}>Submit</button>
         </div>
      </div>

      <div className="display-col">
          <Display name={name} email={email} phone={phone} education={education} schoolName={schoolName} 
              schoolYear={schoolYear} experience={experience} fromYear={fromYear} toYear={toYear}
          />
      </div>
      
      
    </div>
  );
}
}

export default App2;
