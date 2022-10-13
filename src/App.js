import React,{useState} from 'react';
import './App.css';
import Inputer from './components/Inputer';
import Result from './components/Result';
import axios from "axios";
import Footer from './components/Footer';

function App() {
   const[Input,setInput]=useState("");
   const[temp,setTemp]=useState("");
   const[description,setDescription]=useState("");
   const[icon,setIcon]=useState("");

   const findWeather =  async() =>{
     const apiKey="c9429617c83f07cbf75e30a93ac3cebd";
     const unit="metric";
     const url="https://api.openweathermap.org/data/2.5/weather?q="+Input +"&appid="+apiKey + "&units="+ unit;
     const response=await axios.get(url);
     const temp=  await response.data.main.temp;
     const weatherDescription= await response.data.weather[0].description; 
     const icon= await response.data.weather[0].icon;
     const imageURL="https://openweathermap.org/img/wn/"+ icon+ "@2x.png";
     setTemp(temp);
     setDescription(weatherDescription);
     setIcon(imageURL);
     setInput("");
   };
  return (
    <div className="app">
      {temp === "" ? (
      <Inputer input={Input} Setinput={setInput} findWeather={findWeather}/>
      ) : (
      <Result temp={temp} desc={description} icon={icon}  Set={setTemp}/>
      )}
      <Footer/>
    </div>
  );
}

export default App;
