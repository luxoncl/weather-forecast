import  Button  from "@mui/material/Button";
import React from "react";
import "./Result.css";

const Result = ({temp,desc,icon,Set}) => {
  return (
    <div className="result">
      <div className="result__card">
        <h1> TEMP: {temp} </h1>
        <p> {desc} </p>
        <img src={icon} alt="logo" />  <br/>
         <Button  variant="contained" color="primary" onClick={()=>{ Set(""); }}>
          Back
         </Button>
      </div>
      <div>

      </div>
    </div>
  );
};
export default Result;