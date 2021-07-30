import React from 'react';
import Home from './components/Home/HomeComponent'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Home/>
    </div>
  </BrowserRouter>
  );
}
export default App;