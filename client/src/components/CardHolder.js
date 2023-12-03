import Card from './Card';
import { useEffect, useState } from 'react';

function CardHolder() {
    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/shopdata')
            .then(res => res.json())
            .then(data => {
                const d = data.fireworkData.filter(i=>i.type=='firework');
                setFireworks(d);
            }).catch(err => {
                console.log("Error loading shop data:")
                console.log(err);
            });
    }, []);


    if(fireworks.length == 0) {
        console.log("Loading...")
        return (
            <h1 className='text-light'>Loading...</h1>
        )
    }

    return (
        <>
            <img src="./headerImg2.png" className="bannerImage" alt="banner" />
            {
                fireworks.map((f, index) => (
                    <Card key={index} data={f} />
                ))
            }
        </>
    )
}

export default CardHolder;