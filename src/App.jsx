import { useState } from 'react'
import dotenv from 'dotenv';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayIP from './DisplayIP';
import DisplayMap from './DisplayMap';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayIP />
      <DisplayMap />
      <div id="map"></div>

      
    </>
  )
};

export default App
