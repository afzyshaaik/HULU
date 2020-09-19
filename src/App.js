import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
import './App.css';

function App() {

  const [selectedOption, setSelectedOption] =useState(requests.fetchTrending);
  return (
    <div className="app">
       

       {/*header */}
       <Header />

       {/*nav */}
       <Nav setSelectedOption={setSelectedOption}/>
       

       {/*results */}

       <Results  selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
