// Importing Express framework and setting up a router
const express= require('express')
const router=express.Router()


// Middleware for parsing request bodies (form data)
router.get('/', function(req,res,next){
     // Renders the 'index' view template with provided options
    res.render('index',{title:'Feedback app',author:'nam'})
})
 // Route to handle GET requests for the feedback form page
router.get('/feedback-form', function(req,res,next){
    // Renders the 'student_feedback_form' view template without any specific options
    res.render('studen_feedback_form')
})
// Route to handle POST requests when a feedback form is submitted
router.post('/submit-feedback',function(req,res,next){
  
    const formData= req.body // Extracts data from the form submission

   
  // Renders the 'thank_you' view template with options passed from the form data  
    res.render('thank_you',{
          name: formData.name,// Form input for name
          email: formData.email,// Form input for email
          message: formData.comments, // Form input for comments
          currentSudent: formData['current-student']// Form input to check if the user is a current student

    })
})
// Export the router so it can be included in the main app
module.exports=router