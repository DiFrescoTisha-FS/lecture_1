const express = require('express');
const cors = require('cors');
const app = express();
const userRoute = require('../routes/router');

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// actuator
app.get('/', (req,res) => {
    res.status(200).json({ 
        message:'Service is up' 
    })
});

// routing
app.use('/users', userRoute);

//error handling
app.use((req,res,next) => {
    const error = new Error();
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

// connected to mongoose
// mongoose.connect(url, () => {
//     console.log('callback')
// })

module.exports = app;