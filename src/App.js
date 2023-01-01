import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SingleCountry from './components/SingleCountry';


function App() {
  const [country, setCountry] = useState('')
  const [items, setItems] = useState([]);



  const fetchData = async ()=>{
    if(country.length === 0){
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      setItems(data);
    } else {
      const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await response.json();
      setItems(data);
    }
  }

  useEffect(()=>{
    fetchData();
  },[country])

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar country={country} setCountry={setCountry} items={items}/>} exact/>
        <Route path="/singleCountry" element={<SingleCountry/>} exact/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
