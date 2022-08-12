//Inside require if the path given is not like ../ or ./ and if it is directly a name then 
//it means that it directly comes from a node-module folder or it is a inbuilt module !

//const os = require('os'); //Inbuilt module
//const path = require('path'); //Inbuilt module
// const express = require('express'); //node-module
// const app = express();

// app.use('/',(req,res)=>{
//     console.log(req);
//     res.write('<h1> hello </h1>');
//     res.end();
// })

// app.get('/',(req,res)=>{
//     res.json('Heloo from express server');
//     // res.end();
// })

// app.get('/Home',(req,res)=>{
//     res.write('<h1>Heloo from express server</h2>');
//     // res.end();
// })

// app.get('/Page',(req,res)=>{
//     res.send('Heloo from express server');
//     // res.end();
// })

// app.get('/Main',(req,res)=>{
//     res.write('<h1>Heloo from express server</h1>');
//     // res.end();
// })

// app.listen(3000, ()=>{
//     console.log('Express server is runing in port 3000');
// })

//Practice 1

// const express = require('express');
// const app = express();

// const userRoute = require('./routes/userRoute');
// const adminRoute = require('./routes/adminRoute');

// app.use('/user', userRoute)
// app.use('/admin', adminRoute);

// app.listen(3000, ()=>{
//     console.log('Express running');
// })

//Practice 2

/*
const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'my secret key',
    resave: false,
    saveUninitalized: false,
    // cookie: { maxAge: 10 }
}));

app.use('/home', (req, res, next) => {
    console.log(req.session.id);
 res.send('<h1>Home page</h1>');
});

app.use('/logout', (req,res,next)=>{
    req.session.destroy(()=>{
        console.log('session destroyed')
    });
    res.send('<h1>Logged out</h1>');
});
app.use('/', (req, res, next) => {
    res.send('<h1>Root page</h1>');
});
app.listen(3000, () => console.log('Server running in port 3000'));


*/

//Toda List 2 :-

const express = require('express');
const app = express();
const path = require('path');

const restRoute = require('./routes/todo');

app.use(express.json());

app.use('/api', restRoute);

app.use((req,res)=>{
    res.status(404).send('page not found');
});



app.listen(3000, ()=>{
    console.log('Express server is running at port 3000');
});

//Cors = Cross origin resourse sharing.

