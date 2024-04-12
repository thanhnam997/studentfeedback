const express =require('express')
const path=require('path')
const bodyParser=require('body-parser')

//import the routes in routes/index.js
const indexRouter=require('./routes/index')

//create the web application
const app=express()

//enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false}))

//serve static files,such as CSS
const staticFilelocation =path.join(__dirname,'public')
app.use(express.static(staticFilelocation))



//configure  it to use  the handlebars template engine  and 
// work  with template files  in views directory 
app.set ('views',path.join(__dirname,'views'))
app.set('view engine','hbs');

// make the routes in index.js available to the app
app.use('/',indexRouter)

// Start server running 
let server=app.listen (process.env.PORT ||  3000 ,function () {
 console.log('express server ruinning on port',server.address().port)
})
