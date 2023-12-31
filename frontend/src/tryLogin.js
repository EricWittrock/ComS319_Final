export function tryLogin(email, password) {
    if(password.length == 0) {
        window.alert("password is empty");
        return;
    }
    console.log("Trying to login with email: " + email + " and password: " + password);
    fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        }),
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.success) {
            localStorage.setItem("session", data.session);
            window.location.reload();
            //window.globalVars.account.email = data.email;
            //document.getElementById('page').style.filter="";
            //document.querySelectorAll('.loginContainer').forEach(e => e.style.display="none");
        }else {
            window.alert(data.error)
        }
    }).catch(err => {
        console.log("login response error:")
        console.log(err);
    });
}

export function tryRegister(email, password) {
    if (!email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        window.alert("invalid email");
        return;
      }
    if(email.length == 0) {
        window.alert("email is empty");
        return;
    }
    if(password.length == 0) {
        window.alert("password is empty");
        return;
    }
    if(password.length < 7) {
        window.alert("password is too short");
        return;
    }

    console.log("Trying to register with email: " + email + " and password: " + password);
    // "proxy": "http://localhost:8000",
    fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        }),
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.success) {
            window.globalVars.account.email = data.email;
            window.globalVars.account.session = data.session;
            localStorage.setItem("session", data.session);
            document.getElementById('page').style.filter="";
            document.querySelectorAll('.loginContainer').forEach(e => e.style.display="none");
        }else {
            window.alert(data.error)
        }
    }).catch(err => {
        console.log("login response error:")
        console.log(err);
    });
    
}

export function trySessionLogin() {
    let session = localStorage.getItem("session");
    window.globalVars.session = session;
    if(!session) {
        console.log("no session set. not auto logging in");
        window.globalVars.account.email = "";
        window.globalVars.account.session = "";
        return;
    }
    
    fetch('http://localhost:8000/sessionLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            session: session
        }),
    })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            console.log("session login success");
            window.globalVars.account.email = data.email;
        }else {
            console.log("session login failed");
            localStorage.setItem("session", "");
            window.globalVars.session = "";
            window.globalVars.account.email = "";
        }
    })
    .catch(err => {
        console.log("login response error:")
        console.log(err);
        localStorage.setItem("session", "");
        window.globalVars.session = "";
        window.globalVars.account.email = "";
    });
}

export function trySendCart() {
    let email = window.globalVars.account._email;
    if(!email) {
        console.log("no email set. not sending cart");
        return;
    }
    console.log("sending cart for email: " + email);
    fetch('http://localhost:8000/updateCart', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cart: window.globalVars.cart, session: window.globalVars.account.session}),
    })
}