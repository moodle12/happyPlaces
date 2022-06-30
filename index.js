const express = require("express");
const userTypeController = require("./controller/userTypeController")
const userController = require("./controller/userController")
const customerFeedbackController = require("./controller/customerFeedbackController")
const businessController = require("./controller/businessController")
const userPostController = require("./controller/userPostController")
const placesController = require("./controller/placesController")
const activityController = require("./controller/activityController")
const mongoose = require("mongoose");
const app = express()


app.use(express.json())  //body
app.use(express.urlencoded({extended:true})) //body -- extended true because of plus or any other symbol


mongoose.connect("mongodb://localhost:27017/happyPlaces",function (err) {

    if (err) {
        console.log("OH NO!! Something went wrong!");
        console.log(err);
    }
    else{
        console.log("db Connected Successfully...");
    }
    
})


//userTypes --api
app.get('/userType',userTypeController.getAllUserTypes)
app.post('/userType',userTypeController.addUserType)
app.delete('/userType',userTypeController.deleteUserTypes)
app.put('/userType',userTypeController.updateUserTypes)
//userTypes --api


//user--api
app.get('/user',userController.getAllUser)
app.post('/user',userController.addUser)
app.delete('/user',userController.deleteUser)
app.put('/user',userController.updateUser)
//user--api


//customerFeedback--api
app.get('/customerFeedback',customerFeedbackController.getAllCustomerFeedback)
app.post('/customerFeedback',customerFeedbackController.addCustomerFeedback)
app.delete('/customerFeedback',customerFeedbackController.deleteCustomerFeedback)
app.put('/customerFeedback',customerFeedbackController.updateCustomerFeedback)
//customerFeedback--api


//business--api
app.get('/business',businessController.getAllBusiness)
app.post('/business',businessController.addBusiness)
app.delete('/business',businessController.deleteBusiness)
app.put('/business',businessController.updateBusiness)
//business--api

//userPost--api
app.get('/userPost',userPostController.getAllUserPosts)
app.post('/userPost',userPostController.addUserPost)
app.delete('/userPost',userPostController.deleteUserPosts)
app.put('/userPost',userPostController.updateUserPosts)
//userPost--api


//places--api
app.get('/place',placesController.getAllPlaces)
app.post('/place',placesController.addPlace)
app.delete('/place',placesController.deletePlace)
app.put('/place',placesController.updatePlace)
//places--api


app.listen(9909,function(err){
    if(err){
        console.log("Server not connected....");
    }else{
        console.log("server started....at 9909");
    }
});