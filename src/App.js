import React from "react";


class App extends React.Component {
  
  render(){
  return (
    <div>
      <p>hello</p>
      <div className="a-section">
          <form>
            <label>Name </label>
            <input type='text'></input> <br></br>
            <label>Email </label>
            <input type="email"></input><br></br>
            <label>Phone </label>
            <input type="number"></input>
          </form>
      </div>


      <div className="b-section">
        <form>
          <label>Education</label>
          <input type="text"></input><br></br>
          <label>School Name</label>
          <input type="text"></input>
          <labe>Year</labe>
          <input type="number"></input><br></br>
        </form>
      </div>

      <div className="c-section">
        <form>
          <label>Experience</label>
          <input type="text"></input><br></br>
          <label>From</label><input type="month"></input>
          <label>To</label><input type='month'></input>
        </form>
      </div>
      
    </div>
  );
}
}

export default App;
