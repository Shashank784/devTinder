const express = require('express');

const app = express();

// app.get("/user", (req, res)=> {
//     console.log(req.query)
//     res.send({firstName: "shashank", LastName: "sagar"});
// });


// app.get("/user/:userId/:name/:password", (req, res)=> {
//     console.log(req.params);
//     res.send({firstName: "shashank", LastName: "sagar"});
// });

//GET / Users => middleware chain => request handlet

app.use("/", (req, res, next)=> {
    // res.send("handling / route");
    next();
});

app.get("/user", (req, res, next)=> {
    console.log("Handleing /user routes");
    next();
},
(req, res, next)=> {
    res.send("1st Route Handler");
},(req, res, next)=> {
    res.send("2nd Route Handler");
});
 
app.listen(4000, ()=> {
    console.log('Server is running on port 4000 ...');
});