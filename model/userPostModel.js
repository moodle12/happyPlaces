const mongoose = require("mongoose");

const UserPostSchema = new mongoose.Schema({
    userID:{
        type:Number
    },
    postID:{
        type:Number
    },
    postCount:{
        type:Number
    }
})


module.exports = mongoose.model("Userpost",UserPostSchema)


// Table No.:
// 	Table Name: User_Posts

// Field		DataType	Constraints	Description

// UserID		integer		Foreign Key	Generated User ID
// PostID		integer		Foreign Key	Generated Post ID
// PostCount	boolean		Not Null		Initial Value = 0	
