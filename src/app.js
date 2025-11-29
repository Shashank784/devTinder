const express = require('express');

const app = express();


app.use("/", (req, res)=> {
    res.send('start from server!');
});

app.use("/test", (req, res)=> {
    res.send('Hello from server!');
});

app.use("/hello",(req, res)=> {
    res.send('test server!');
});

app.listen(4000, ()=> {
    console.log('Server is running on port 4000 ...');
});