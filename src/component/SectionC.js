import React from "react";

class SectionC extends React.Component {

    render(){
        return (
    <div className="c-section">
        <form>
          <label>Experience</label>
          <input type="text"></input><br></br>
          <label>From</label><input type="month"></input>
          <label>To</label><input type='month'></input>
        </form>
    </div>
        )
    }
}

export default SectionC;