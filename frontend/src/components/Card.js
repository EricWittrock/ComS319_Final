import { useState, useEffect } from "react";

function Card({data, email, forceUpdate}) {
    const [hover, setHover] = useState(false);
    const [count, setCount] = useState(window.globalVars.cart[data.productid] || 0);

    function incClick (e) {
        let c = (~~count)+1;
        setCount(c);
        window.globalVars.cart[data.productid] = c;
    }
    
    function decClick () {
        let c = (~~count)-1;
        if (c >= 0) {
            setCount(c);
            if(c == 0){
                delete window.globalVars.cart[data.productid];
            }else{
                window.globalVars.cart[data.productid] = c;
            }
        }
    }

    function animateClick () {
        let canvas = document.getElementById("canvas");
        canvas.style.display = "block";
        let time = Date.now();

        
        document.body.onclick = function() {
            if(Date.now()-time < 50) return;
            canvas.style.display = "none";
        }

        window.globalVars.activeFirework = data.name;
    }

    useEffect(() => {
        setCount(window.globalVars.cart[data.productid] || 0);
    }, [forceUpdate]);

    return (
    <div id="shop-element-template" className="col bg-dark" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <div className="container-fluid no-gutters">
            <div className={"shop-row row" + (hover ? " hover" : "")}>
                <div className="col-3">
                    <img className="dimImage" src={"http://localhost:8000/public/"+data.image[hover?1:0]} alt = "Firework1"/>
                </div>
                <div className="col-9">
                    <h2 className="text-white">{data.name}</h2>
                    <h4 style={{color: "rgb(116, 116, 116)"}}>{data.description}</h4>
                    <div className="card-price-holder">
                        <span className="card-price">${data.price}.00</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center" style={{marginTop:"7%"}}>
                        <div className="btn-group w-100">
                            <div className="d-flex justify-content-center">
                                
                                <div style={{display:email?"none":""}}>
                                    <h5 className="text-white" style={{opacity:"0.5"}}>You must be logged in to add to cart</h5>
                                </div>

                                <div className="input-group w-auto" style={{display: (email && forceUpdate<10000)?"":"none"}}>
                                    <input readOnly type="text" value={count} className="form-control" aria-label="Example input" aria-describedby="button-addon1"/>
                                    <button className="btn btn-outline-info" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={incClick}>+</button>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={decClick}>-</button>
                                </div>

                                <div className="input-group w-auto" style={{display: (forceUpdate>=10000)?"":"none"}}>
                                    <h5 className="text-white" style={{opacity:"0.5"}}>x{window.globalVars.cart[data.productid]||0}</h5>
                                </div>

                                <button className="btn btn-outline-info" type="button" id="button-addon1" data-mdb-ripple-color="dark" style={{marginLeft:"20px", display: (forceUpdate<10000)?"":"none"}} onClick={animateClick}>Animate!</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card;