import React, { useEffect } from "react";


const Display = (props) =>{
     const { name,email,phone,education,schoolName,schoolYear,experience,fromYear,toYear} = props;
   
    
    
        return(
            <div className="cv-display">
               <div>
               <div className="title">Name</div><div>{name}</div>
               </div>
               <div>
               <div className="title">Email</div><div>{email}</div>
               </div>
               <div>
               <div className="title">Phone</div><div>{phone}</div>
               </div>
               <div>
               <div className="title">Last education</div><div>{education}</div>
               </div>
               <div>
               <div className="title">School name</div><div>{schoolName}</div>
               </div>
               <div>
               <div className="title">School Year</div><div>{schoolYear}</div>
               </div>
               <div id="exp">
               <div className="title">Experience</div><div>{experience}</div>
               </div>
               <div>
               <div className="title">From year: {fromYear}</div><div>To: {toYear}</div>
               </div>
            </div>
        )
    
}

export default Display;