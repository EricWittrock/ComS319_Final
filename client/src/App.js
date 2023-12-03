import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardHolder from './components/CardHolder';
import Cart from './components/Cart';
import About from './components/About';
import Login from './components/Login';

const STATE_SHOP = 0;
const STATE_CHECKOUT = 1;
const STATE_ABOUT = 2;

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("state changed to "+ state);
  }, [state]);

  return (
    <div className="App">
      <div id="page">
        <Header callback={setState}/>
        {
          state==STATE_SHOP && <CardHolder/>
        }
        {
          state==STATE_CHECKOUT && <Cart/>
        }
        {
          state==STATE_ABOUT && <About/>
        }
      </div>
      <Login />
    </div>
  );
}

export default App;
