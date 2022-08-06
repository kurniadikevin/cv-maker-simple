import React, {  useState }  from "react";
import Display from "./component/display";

const AppHooks = () =>{

    const [update, setUpdate] = useState({});

    const [submit, setSubmit] = useState({});
  

    const handleChange =  (e) =>{
        setUpdate({...update, [e.target.name] : (e.target.value) });
    }

    const handleSubmit = () =>{
      setSubmit(update);
    }

    console.log(update);

    return(
        <div className='App'>
      <div className="input-col">
          <h1>CV Application</h1>
         
          <div className="a-section">
              <form>
               <div>
                  <label>Name </label>
                  <input name='name' type='text' onChange={handleChange}></input> 
              </div>
              <div>
                  <label>Email </label>
                  <input name='email' type="email" onChange={handleChange}></input>
              </div>
              <div>
                  <label>Phone </label>
                  <input name='phone'type="number" onChange={handleChange}></input>
              </div>
              </form>        
          </div>

          <div className="b-section">
            <form>
              <div>
                  <label>Education</label>
                  <input name='education' type="text" onChange={handleChange}></input>
              </div>
              <div>
                  <label>School Name</label>
                  <input name='schoolName' type="text" onChange={handleChange}></input>
              </div>
              <div>  
                  <label>Year</label>
                  <input name='schoolYear' type="number" onChange={handleChange}></input>
              </div>
            </form>
                
          </div>

        <div className="c-section">
              <form>
                <div>
                    <label>Experience</label>
                    <textarea rows='15' cols='50' id='exp-input'name='experience' type="text" onChange={handleChange}></textarea>
                </div>
                <div>
                  <div>
                    <label>From</label>
                    <input id='fromto-input'name='fromYear' type="number" onChange={handleChange}></input>
                  </div>
                  <div>
                    <label>To</label>
                    <input id='fromto-input'name='toYear' type='number' onChange={handleChange}></input>
                  </div>
                </div>  
              </form>
         </div>
         <div className="button-cont">
              <button onClick={handleSubmit}>Submit</button>
         </div>
      </div>

      <div className="display-col">

       < Display submit={submit} />
       
      </div>
    </div>
    )
}

export default AppHooks;
