import React, { useState, useEffect } from 'react';
import { trySendCart } from './tryLogin';
import Header from './components/Header';
import CardHolder from './components/CardHolder';
import Cart from './components/Cart';
import About from './components/About';
import Login from './components/Login';
import Profile from './components/Profile';

const STATE_SHOP = 0;
const STATE_CHECKOUT = 1;
const STATE_ABOUT = 2;
const STATE_PROFILE = 3;

function App() {
  const [state, setState] = useState(0);
  const [email, setEmail] = useState(window.globalVars.account._email);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(()=>{
    window.addEventListener('beforeunload', trySendCart);
  }, []);

  useEffect(() => {
    console.log("state changed to "+ state);
  }, [state]);

  useEffect(() => { // load cart data on email change
    console.log("loading cart for email: " + email);
    fetch('http://localhost:8000/getCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({session: window.globalVars.account.session}),
    }).then(res => res.json())
    .then(data => {
        if(data.success) {
            window.globalVars.cart = data.cart;
            console.log(data, window.globalVars.cart, forceUpdate);
            setForceUpdate(forceUpdate+1); // re-render cart
        }else {
            console.log("failed to load cart");
        }
    }).catch(err => {
        console.log("load cart response error:")
        console.log(err);
    });
  }, [email]);

  return (
    <div className="App">
      <div id="page">
        <Header stateCallback={setState} emailCallback={setEmail}/>
        {
          state==STATE_SHOP && <CardHolder email={email} forceUpdate={forceUpdate}/>
        }
        {
          state==STATE_CHECKOUT && <Cart email={email} forceUpdate={forceUpdate}/>
        }
        {
          state==STATE_ABOUT && <About/>
        }
        {
          state==STATE_PROFILE && <Profile email={email}/>
        }
      </div>
      <Login />
    </div>
  );
}

export default App;
