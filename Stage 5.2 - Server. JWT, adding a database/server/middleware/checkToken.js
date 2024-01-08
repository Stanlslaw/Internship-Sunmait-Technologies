import jwt from "jsonwebtoken"
import config from "../configs/jwt.config.js"
function checkToken(req,res,next){
    try {
        const token = req.headers.accesstoken;
        if(!token){
            res.status(200).json({
                message: "Invalid token"
            })
            return
        }
        if(!jwt.verify(token,config.jwt_access_key)){
            res.status(200).json({
                message: "Invalid token"
            })
            return;
        }
        next()
    }
    catch (err){
        res.status(200).json({
            message: "Ivalid token"
        })
    }
}

export default checkToken