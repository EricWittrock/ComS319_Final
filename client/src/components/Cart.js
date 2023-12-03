function Cart() {
    let data = [];

    function changePageStore() {

    }

    function changePageConfirm() {

    }
  
    return (
      <main>   
      <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
  
                  <div className="row">
  
                    <div className="col-lg-7">
                      <button className="btn btn-primary my-2" onClick={changePageStore}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <span> Back to Store</span>
                      </button>
  
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <h3 className="mb-1">Shopping cart</h3>
                          <p className="mb-0">You have {data.length} items in your cart</p>
                        </div>
                      </div>
  
                      todo
  
                    </div>
                    <div className="col-lg-5">
  
                      <div className="card checkoutModal text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                            </svg>
                          </div>
  
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label className="form-label" htmlFor="typeName">Full Name</label>
                            </div>
  
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeEmail" className="form-control form-control-lg" siez="17"
                                placeholder="your@email.com"/>
                              <label className="form-label" htmlFor="typeEmail">Email</label>
                            </div>
  
                            <hr className="my-4"/>
  
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeState" className="form-control form-control-lg"
                                    placeholder="Your State" size="7" maxLength="15" />
                                  <label className="form-label" htmlFor="typeState">State</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeAdr" className="form-control form-control-lg"
                                    placeholder="Your Address" size="1" />
                                  <label className="form-label" htmlFor="typeAdr">Address</label>
                                </div>
                              </div>
                            </div>
  
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeCity" className="form-control form-control-lg"
                                    placeholder="Your City" size="7"/>
                                  <label className="form-label" htmlFor="typeCity">City</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeZip" className="form-control form-control-lg"
                                    placeholder="Your Zip" size="1" minLength="5" maxLength="5" />
                                  <label className="form-label" htmlFor="typeZip">Zip Code</label>
                                </div>
                              </div>
                            </div>
  
                            <hr className="my-4"/>
  
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeCard" className="form-control form-control-lg" siez="17"
                                placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                              <label className="form-label" htmlFor="typeCard">Card Number</label>
                            </div>
  
                          </form>
  
                          <hr className="my-4"/>
  
                          todo
  
                          <hr className="my-4"/>
  
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total</p>
                            <p className="mb-2">${999}.00</p>
                          </div>
  
                          <button type="button" className="btn btn-outline-light btn-block btn-lg" onClick={changePageConfirm}>
                            <div className="d-flex justify-content-between">
                              <span>${999}.00 Confirm</span>
                            </div>
                          </button>
  
                        </div>
                      </div>
  
                    </div>
  
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  
  
  
  
      </main>
    );
    
  }

  export default Cart;