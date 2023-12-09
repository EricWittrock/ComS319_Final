import React, { useEffect, useState } from 'react';
import Card from './Card';

function CardHolder({email, forceUpdate}) {
  const [fireworks, setFireworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  useEffect(() => {
    fetch('http://localhost:8000/shopdata')
      .then(res => res.json())
      .then(data => {
        const d = data.fireworkData.filter(i => i.type === 'firework');
        window.globalVars.fireworkData = data.fireworkData;
        window.globalVars.shopData = d;
        setFireworks(d);
      })
      .catch(err => {
        console.log('Error loading shop data:');
        console.log(err);
      });
  }, []);

  console.log("forece update: " + forceUpdate + " in CardHolder"); 
  console.log(window.globalVars.cart);

  const totalCards = fireworks.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = fireworks.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  if (fireworks.length === 0) {
    return <h1 className='text-light'>Loading...</h1>;
  }

  return (
    <>
      <img src='http://localhost:8000/public/headerImg2.png' className='bannerImage' alt='banner' />
      {currentCards.map((f, index) => (
        <Card key={f.productid} data={f} email={email} forceUpdate={forceUpdate}/>
      ))}
      <div className='text-light' style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px', padding:"10px"}}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default CardHolder;