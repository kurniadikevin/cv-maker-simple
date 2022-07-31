import React from "react";

class SectionB extends React.Component {

    render(){
        return (
            <div className="b-section">
            <form>
              <label>Education</label>
              <input type="text"></input><br></br>
              <label>School Name</label>
              <input type="text"></input><br></br>
              <label>Year</label>
              <input type="number"></input><br></br>
            </form>
          </div>
        )
    }
}

export default SectionB;