import { useState } from "react";

function Card({data}) {
    const [hover, setHover] = useState(false);

    // function incClick () {
    //     console.log("inc clicked");
    //     let c = (~~count)+1;
    //     setCount(c);
    //     cartList[id] = c;
    //     localStorage.setItem("cartList", JSON.stringify(cartList));
    //   }
    
    //   function decClick () {
    //     console.log("dec clicked");
    //     let c = (~~count)-1;
    //     if (c >= 0) {
    //       setCount(c);
    //       cartList[id] = c;
    //       localStorage.setItem("cartList", JSON.stringify(cartList));
    //     }
    //   }

    return (
    <div id="shop-element-template" className="col bg-dark" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <div className="container-fluid no-gutters">
            <div className={"shop-row row" + (hover ? " hover" : "")}>
                <div className="col-3">
                    <img className="dimImage" src={data.image[hover?1:0]} alt = "Firework1"/>
                </div>
                <div className="col-9">
                    <h2 style={{color: 'white'}}>{data.name}</h2>
                    <h4>{data.description}</h4>
                    <span className="card-price" style={{border: '4px solid rgb(60 175 60)', color: 'white', backgroundColor: "rgb(100 193 125)", borderRadius:"10px"}}>${data.price}.00</span>
                    <div className="d-flex justify-content-between align-items-center" style={{marginTop:"7%"}}>
                        <div className="btn-group">
                            <div className="d-flex justify-content-center">
                                <div className="input-group w-auto">
                                    <input readOnly type="text" value="2" className="form-control" aria-label="Example input" aria-describedby="button-addon1"/>
                                    <button className="btn btn-outline-success" type="button" id="button-addon1" data-mdb-ripple-color="dark" /*onClick={incClick}*/>+</button>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" data-mdb-ripple-color="dark" /*(onClick={decClick}*/>-</button>
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