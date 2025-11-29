const express = require('express');

const app = express();

// app.get("/user", (req, res)=> {
//     console.log(req.query)
//     res.send({firstName: "shashank", LastName: "sagar"});
// });


app.get("/user/:userId/:name/:password", (req, res)=> {
    console.log(req.params);
    res.send({firstName: "shashank", LastName: "sagar"});
});

 

app.listen(4000, ()=> {
    console.log('Server is running on port 4000 ...');
});