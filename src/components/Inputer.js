import React from 'react'
import Input from '@mui/material/Input';
import  Button  from '@mui/material/Button';
import "./Inputer.css";


const Inputer = ({input,Setinput,findWeather}) => {
  const handleChange= (event)=>{
    Setinput(event.target.value)
  };
  console.log(input);
  const handleClick =(event) =>{
      event.preventDefault();
      findWeather();
  }

  return (
    <div className="inputBox">
        <div className="inputBox_field">
        <h1> WEATHER APP</h1>
        <p> Powered By</p>
       <Input placeholder="Enter the city name" onChange={handleChange} value={input}/>
       <br/>
       <br/>
<Button variant="contained" color='primary' type="submit" onClick={handleClick}>Search</Button>

    </div>
</div>
  );
};
export default Inputer