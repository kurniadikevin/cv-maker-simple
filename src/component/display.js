import React from "react";


const Display = (props) =>{
     const { name,email,phone,education,schoolName,schoolYear,experience,fromYear,toYear} = props;
   
    
        return(
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{schoolName}</p>
            </div>
        )
    
}

export default Display;