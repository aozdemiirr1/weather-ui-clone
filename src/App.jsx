import React, { useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';
import Search from './components/Search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
