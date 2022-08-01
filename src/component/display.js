import React from "react";


const Display = (props) =>{
     const { name,email,phone,education,schoolName,schoolYear,experience,fromYear,toYear} = props;
   
    
        return(
            <div className="cv-display">
               <div>Name</div><div>{name}</div>
               <div>Email</div><div>{email}</div>
               <div>Phone</div><div>{phone}</div>
               <div>Last education</div><div>{education}</div>
               <div>School name</div><div>{schoolName}</div>
               <div>School Year</div><div>{schoolYear}</div>
               <div>Experience</div><div>{experience}</div>
               <div>From year: {fromYear}</div><div>To: {toYear}</div>
            </div>
        )
    
}

export default Display;