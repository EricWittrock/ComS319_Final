import { useState } from "react";

function Card({data}) {
    const [hover, setHover] = useState(false);

    return (
    <div id="shop-element-template" className="col bg-dark" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <div className="container-fluid no-gutters">
            <div className={"shop-row row" + (hover ? " hover" : "")}>
                <div className="col-3">
                    <img className="dimImage" src={data.image[hover?1:0]} alt = "Firework1"/>
                </div>
                <div className="col-9">
                    <h3>{data.name}</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card;