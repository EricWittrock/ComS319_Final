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
                    <h4 className="text-white" style={{opacity:"0.5"}}>{data.description}</h4>
                    <span className="card-price" style={{border: '4px solid rgb(60 175 60)', color: 'white', backgroundColor: "rgb(100 193 125)", borderRadius:"10px"}}>${data.price}.00</span>
                    <div className="d-flex justify-content-between align-items-center" style={{marginTop:"7%"}}>
                        <div className="btn-group">
                            <div className="d-flex justify-content-center">
                                
                                <div style={{display:email?"none":""}}>
                                    <h5 className="text-white" style={{opacity:"0.5"}}>You must be logged in to add to cart</h5>
                                </div>

                                <div className="input-group w-auto" style={{display: (email && forceUpdate<10000)?"":"none"}}>
                                    <input readOnly type="text" value={count} className="form-control" aria-label="Example input" aria-describedby="button-addon1"/>
                                    <button className="btn btn-outline-success" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={incClick}>+</button>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={decClick}>-</button>
                                </div>

                                <div className="input-group w-auto" style={{display: (forceUpdate>=10000)?"":"none"}}>
                                    <h5 className="text-white" style={{opacity:"0.5"}}>x{window.globalVars.cart[data.productid]||0}</h5>
                                </div>

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