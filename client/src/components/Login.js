import React, { useState } from 'react';

function Login() {

    const [isRegistering, setIsRegistering] = useState(false);

    function returnToHome() {
        document.getElementById('page').style.filter="";
        document.querySelectorAll('.loginContainer').forEach(e => e.style.display="none");
        setIsRegistering(false);
    }

    // Sign up Page
    if(isRegistering) {
        return (
            <div className="loginContainer" style={{display: "block"}}>
            <section className="background-radial-gradient overflow-hidden">
        
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
                        The best offer <br />
                        <span id="infoHeaderColored">for your business</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Temporibus, expedita iusto veniam atque, magni tempora mollitia
                        dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                        ab ipsum nisi dolorem modi. Quos?
                        </p>
                    </div>
        
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        
                        <div className="card bg-glass">
                        <div className="card-body px-4 py-5 px-md-5">
                            <form>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="text" id="form3Example1" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example1">First name</label>
                                </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="text" id="form3Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                                </div>
                                </div>
                            </div>
        
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control" />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>
        
                            <div className="form-outline mb-4">
                                <input type="password" id="form3Example4" className="form-control" />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>
        
                            {/* <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                <label className="form-check-label" htmlFor="form2Example33">
                                Subscribe to our newsletter
                                </label>
                            </div> */}
        
                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                Sign up
                            </button>
        
                            <div className="text-center">
                                <p type="button" onClick={returnToHome}><u>return to home page</u></p>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }

    // Login Page
    return (
        <div className="loginContainer">
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                    <div className="card-body p-5 text-center">

                        <div className="mb-md-5 mt-md-4 pb-5">

                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                        <div className="form-outline form-white mb-4">
                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                        </div>

                        <div className="form-outline form-white mb-4">
                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                        </div>

                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div>

                        </div>

                        <div>
                        <p className="mb-0">Don't have an account? <a onClick={()=>{setIsRegistering(true)}} className="text-white-50 fw-bold">Sign Up</a>
                        </p>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login;