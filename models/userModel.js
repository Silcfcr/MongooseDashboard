const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    type : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    age : {
        type : Number,
        required : true,
    }
});

// creates the collection
const User = mongoose.model( 'users', UserSchema );

const UserModel = {
    createUser : function( newUser ){
        return User.create( newUser );
    },
    getUsers : function(){
        return User.find();
    },
    getUserById : function( id ){
        console.log("===>", id);
        return User.findOne({ _id : id });
    },
    removeAnimal : function(id) {
        console.log(id);
        return User.deleteOne({ _id : id })
        
    },
    updateAnimal : function(id, animal) {
        return User.findByIdAndUpdate({ _id : id }, {$set: animal})
    }
};
module.exports = {UserModel};
