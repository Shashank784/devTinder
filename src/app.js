const express = require('express');

const app = express();

app.use("/user", (req, res)=> {
    res.send('Hello User!');
})

app.get("/user", (req, res)=> {
    res.send({firstName:'shashank', lastName:'sagar'});
});

app.post("/user", (req, res)=> {
    //saving data to database
    res.send("Data Received");
});

app.delete("/user", (req, res)=> {
    //saving data to database
    res.send("Delated Successfully");
});

app.use("/test", (req, res)=> {
    res.send('Hello from server!');
});

app.listen(4000, ()=> {
    console.log('Server is running on port 4000 ...');
});