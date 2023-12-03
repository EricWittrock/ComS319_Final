import React, { useState } from 'react';
import {tryLogin, tryRegister} from '../tryLogin.js';

function Login() {

    const [isRegistering, setIsRegistering] = useState(false);

    function returnToHome() {
        document.getElementById('page').style.filter="";
        document.querySelectorAll('.loginContainer').forEach(e => e.style.display="none");
        setIsRegistering(false);
    }

    function clickLogin() {
        const email = document.getElementById('typeEmailX').value;
        const password = document.getElementById('typePasswordX').value;
        tryLogin(email, password);
    }

    function clickRegister() {
        const email = document.getElementById('form3Example3').value;
        const password = document.getElementById('form3Example4').value;
        tryRegister(email, password);
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
                        Sign up now for <br />
                        <span id="infoHeaderColored">Little Fireworks</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
                        Our locally owned and operated business has been locally owned and operated since 2023. Our name may be Little, but our fireworks are too.
                        </p>
                    </div>
        
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        
                        <div className="card bg-glass">
                        <div className="card-body px-4 py-5 px-md-5">
                            <form>
        
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
        
                            <button type="button" onClick={clickRegister} className="btn btn-primary btn-block mb-4">
                                Sign up
                            </button>
        
                            <div className="text-center">
                                <p type="button" onClick={returnToHome}><u>Back to home</u></p>
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
                    <div id="loginBox" className="card text-white" style={{borderRadius: "1rem"}}>
                    <span onClick={returnToHome}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    </span>
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

                        <p className="small mb-5 pb-lg-2 text-white-50">Forgot password? That's too bad.</p>

                        <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={clickLogin}>Login</button>

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