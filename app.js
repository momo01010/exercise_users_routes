const express = require('express');
const app = express(); 
const morgan =require('morgan');
const userRoutes = require('./routes/user.routes');


app.use("/", (req, res, next) => {
    console.log("atendiendo todas las peticiones");
    next();
})


const requestTime = (req, res, next) => {
    const date = Date.now();
    req.timestamp = date; 
    next();
}

app.use(requestTime);
app.use(morgan("tiny"));
app.use(express.json());

app.use(userRoutes);  




app.listen(5500, () => {
    console.log('Port server at 5500');
});

