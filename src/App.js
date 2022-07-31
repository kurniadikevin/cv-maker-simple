import React from "react";
import SectionA from "./component/SectionA";
import SectionB from "./component/SectionB";
import SectionC from "./component/SectionC";


class App extends React.Component {
  
  render(){
  return (
    <div>
      <div className="input-col">
          <h1>CV Application</h1>
          <SectionA />
          <SectionB />
          <SectionC />
          <button>Submit</button>
      </div>
      <div className="display-col">

      </div>
      
      
    </div>
  );
}
}

export default App;
