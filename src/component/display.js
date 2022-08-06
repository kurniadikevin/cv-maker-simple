import React from "react";



const Display = ({submit}) =>{
    
   
    
        return(
            <div className="cv-display">
               <div className="display-title">Name</div><div>{submit.name}</div>
               <div className="display-title">Email</div><div>{submit.email}</div>
               <div className="display-title">Phone</div><div>{submit.phone}</div>
               <div className="display-title">Last education</div><div>{submit.education}</div>
               <div className="display-title">School name</div><div>{submit.schoolName}</div>
               <div className="display-title">School Year</div><div>{submit.schoolYear}</div>
               <div className="display-title">Experience</div><div>{submit.experience}</div>
               <div>From year: {submit.fromYear}</div><div>To: {submit.toYear}</div>
            </div>
        )
    
}

export default Display;