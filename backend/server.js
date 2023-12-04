const express = require('express');
const app = express();
const path = require('path');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const cors = require("cors");
const { MongoClient } = require("mongodb");

const port = 8000;
const url = "mongodb://127.0.0.1:27017/";
const dbName = "final";
const collectionName = "users";

const client = new MongoClient(url);
var db;
var collection;

app.use(cors());
app.use(bodyParser.json());

// user makes request for the list of shop items
app.get('/shopdata', (req, res) => {
    res.json(require('./shopdata.json'));
});

// user makes request to log in
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const passHash = hashPassword(password);

    const results = await collection.find({"email":email}).toArray();

    if(results.length == 0) {
        res.json({success: false, error: "No account with that email exists"});
        return;
    }

    if(results[0].password != passHash) {
        res.json({success: false, error: "Incorrect password"});
        return;
    }

    const sessId = randSessionId();
    await collection.updateOne({email:email},{$set:{session:sessId}})
    res.json({success: true, email: email, session: sessId});
});

app.post('/sessionLogin', async (req, res) => {
    const sess = req.body.session;
    const results = await collection.find({"session":sess}).toArray();

    if(results.length == 0) {
        res.json({success: false});
        return;
    }

    res.json({success: true, email: results[0].email});
});

// user makes request to create new account
app.post('/register', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const passHash = hashPassword(password);

    const results = await collection.find({"email":email}).toArray();

    if(results.length != 0) {
        res.json({success: false, error: "An account already exists with that email"});
        return;
    }

    const sessId = randSessionId();
    const newUser = {
        email: email,
        password: passHash,
        session: sessId,
        cart: {}
    };
    await collection.insertOne(newUser);

    console.log("register with email: " + email + " and password: " + password);
    console.log("Hashed password: " + passHash);

    res.json({success: true, email: email, session: sessId});
});

app.delete("/deleteAccount/", async (req, res) => {
    // TODO
});

app.put("/updateCart/", async (req, res) => {
    console.log("updateCart");
    console.log(req.body);
    await collection.updateOne({session:req.body.session},{$set:{cart:req.body.cart}});
    res.json({success: true});
});

app.post("/getCart/", async (req, res) => {
    console.log("getCart");
    const results = await collection.find({"session":req.body.session}).toArray();
    if(results.length == 0) {
        res.json({success: false});
        console.log("getCart failed");
        return;
    }
    res.json({success: true, cart: results[0].cart});
});

// generate random string of characters
function randSessionId() {
    return Math.random().toString(32).slice(2)
}

// encrypt password with sha256
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('base64');
}

// create test account if it does not already exsist
// then start the server
(async ()=>{
    console.log("Connecting to database...");
    await client.connect();
    db = client.db(dbName);
    collection = db.collection(collectionName);

    console.log("Checking to see if test account exists...");
    const results = await collection.find({"email":"test@test.com"}).toArray();

    if(results.length == 0) {
        console.log("Test account not found. Creating test account...");
        const newUser = {
            email: "test@test.com",
            password: hashPassword("test123"),
            session: randSessionId(),
            cart: {}
        };
        await collection.insertOne(newUser);
    }else {
        console.log("Test account found. Starting server...");
    }

    app.listen(port, () => console.log(`listening on port ${port}`));
})();

app.use('/public', express.static(path.join(__dirname, 'public')));