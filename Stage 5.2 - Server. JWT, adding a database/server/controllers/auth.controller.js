import {Users} from "../database/models/models.js";
import {where} from "sequelize";
import jwt from "jsonwebtoken"
import config from "../configs/jwt.config.js"

class Auth {
  constructor() {}

  async login(req, res) {
    try {
      const { username, password } = req.body;
      let user = await Users.findOne({where: {username: username}});
      if(user){
          if(user.password===password){
            res.status(200).json({
                token: jwt.sign({
                  username: username
                },config.jwt_key,{expiresIn: 60*60})
            })
            return;
          }
          res.status(200).json({
            message: "Incorrect password"
          })
      }
      else{
        res.status(200).json({
          message: "User is not signed up"
        })
      }

    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  }
  async register(req,res){
    try {
      const {username,age, password} = req.body;
      if(await Users.findOne({where:{username: username}})){
          res.status(403).json({
            message: "User with this username already exists"
          })
        return;
      }
      if(!(password&&
          password.length>=4&&
          /\d/.test(password)&&
          /[a-zA-Z]/.test(password))){
        res.status(200).json({
          message: "The password has incorrect syntax, try again"
        })
        return
      }
      if(isNaN(age)||age===''||age<=0){
        res.status(200).json({
          message: "The age has incorrect syntax, try again"
        })
        return
      }
      await Users.create({username: username,password: password})
      res.status(200).json({
        token: jwt.sign({
          username: username
        },config.jwt_key,{expiresIn: 60*60})
      })
    }
    catch (err){
      res.status(200).json({
        message: err.message,
      });
    }
  }
}

export default new Auth();
