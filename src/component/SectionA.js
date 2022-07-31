import React from "react";

class SectionA extends React.Component {
    constructor(){
        super();

        this.state={
            name :  '',
            email : '',
            phone : '',
        }
    }

    handleChange = (ev) =>{
        this.setState({
            name : ev.target.value
        })
    }

    render(){
        return (
        <div className="a-section">
             <form>
            <label>Name </label>
            <input type='text' onChange={this.handleChange}></input> <br></br>
            <label>Email </label>
            <input type="email"></input><br></br>
            <label>Phone </label>
            <input type="number"></input>
          </form>
      </div>
        )
    }
}

export default SectionA;