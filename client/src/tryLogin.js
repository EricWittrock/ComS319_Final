export function tryLogin(email, password) {
    if(password.length == 0) {
        window.alert("password is empty");
        return;
    }
    console.log("Trying to login with email: " + email + " and password: " + password);
    fetch('/login', {
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
    fetch('/register', {
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
    if(!session) {
        console.log("no session set. not auto logging in");
        return;
    }
    
    fetch('/sessionLogin', {
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
        }
    })
    .catch(err => {
        console.log("login response error:")
        console.log(err);
    });
}