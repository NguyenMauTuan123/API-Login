const users = require('../userData').users;
const Error = require('../utils/Error');

const httpStatusCode ={
    Ok:200,
    NotFound:404,
    InternalServerError:500
}

exports.login = (req,res)=>{
      try {
        const userLogin = req.body;
        const user = findUser(userLogin);
        typeof user !== 'undefined' ? 
        res.status(httpStatusCode.Ok).json({ message:"Login success!",user}) :
        res.status(httpStatusCode.NotFound).json(new Error("Login Fail! Username or Password is incorrect").message)
      } catch (error) {
           console.error(error.message)
           res.status(httpStatusCode.InternalServerError).json(new Error(error).message)
      }
       
}

const findUser = userLogin => {
    const isLogin =(item) => userLogin.userName === item.userName && 
                             userLogin.passWord === item.passWord;
    return users.find(isLogin);
}

