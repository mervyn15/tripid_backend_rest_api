var dbConn  = require("./db.js");

var User = function(user){
    this.userName       =   user.userName;
    this.emailAddress   =   user.emailAddress;
    this.password       =   user.password;
    this.userType       =   user.userType;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

// get users by ID from DB
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM users WHERE userId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new users
User.createUser = (UserReqData, result) =>{
    dbConn.query('INSERT INTO users SET ? ', UserReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}

// update user
User.updateUser = (id, UserReqData, result)=>{
    dbConn.query("UPDATE users SET userName=?,emailAddress=?,password=?,userType=? WHERE UserId = ?", [UserReqData.userName,UserReqData.emailAddress,UserReqData.password,UserReqData.userType, userId], (err, res)=>{
        if(err){
            console.log('Error while updating the user');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}

// delete user
User.deleteUser = (id, result)=>{
    // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the employee');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE users SET is_deleted=? WHERE userId = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            console.log("User deleted successfully");
            result(null, res);
        }
    });
}

module.exports = User;