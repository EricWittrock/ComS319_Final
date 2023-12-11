import React, { useEffect, useState } from 'react';
import Card from './Card';

function SaleCardHolder({email, forceUpdate}) {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/shopdata')
      .then(res => res.json())
      .then(data => {
        const d = data.fireworkData.filter(i => (i.type === 'firework'));
        const d2 = d.filter(i => (i.oldPrice));
        window.globalVars.fireworkData = data.fireworkData;
        window.globalVars.shopData = d;
        setFireworks(d2);
      })
      .catch(err => {
        console.log('Error loading shop data:');
        console.log(err);
      });
  }, []);


  if (fireworks.length === 0) {
    return <h1 className='text-light'>Loading...</h1>;
  }

  return (
    <>
      <img src='http://localhost:8000/public/images/saleheader.png' className='bannerImage' alt='banner' />
      {fireworks.map((f, index) => (
        <Card key={f.productid} data={f} email={email} forceUpdate={forceUpdate}/>
      ))}
    </>
  );
}

export default SaleCardHolder;