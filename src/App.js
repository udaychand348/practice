import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './Components/Display';
import Result from './Components/Result';


const App = () => {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display/> } />
          <Route path="/res" element={<Result  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
