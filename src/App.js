import React from 'react';
import Header from './component/Header';
import Features from './component/Features';
import Services from './component/Services';
import Subscribe from './component/Subscribe';

function App() {
  return (
    <div className="App">

      <Header />

      <div className='f-heading'>
        <h1>Features</h1>
        <p>Here are some features of the Software</p>
      </div>

      <Features />

      <Services />

      <Subscribe/>

    </div>
  );
}

export default App;
