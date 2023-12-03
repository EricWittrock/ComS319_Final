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
            window.globalVars.account.email = data.email;
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

export function tryRegister(email, password) {
    if(email.length == 0) {
        window.alert("email is empty");
        return;
    }
    if(password.length == 0) {
        window.alert("password is empty");
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