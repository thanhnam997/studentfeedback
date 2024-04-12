const express= require('express')
const router=express.Router()

router.get('/', function(req,res,next){
     res.render('index',{title:'Feedback app',author:'nam'})
})
 
router.get('/feedback-form', function(req,res,next){
    res.render('studen_feedback_form')
})

router.post('/submit-feedback',function(req,res,next){
    //get the form data from the URL query
    const formData= req.body

    res.render('thank_you',{
          name: formData.name,
          email: formData.email,
          message: formData.comments,
          currentSudent: formData['current-student']

    })
})

module.exports=router