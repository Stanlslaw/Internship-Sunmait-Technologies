import jwt from "jsonwebtoken"
import config from "../configs/jwt.config.js"
class TokenService {
    constructor() {
    }
    async generateToken(payload){
        return {
            access_token: jwt.sign(payload,config.jwt_access_key,{expiresIn: '30m'} ),
            refresh_token: jwt.sign(payload, config.jwt_refresh_key,{expiresIn: '7d'} )
        }
    }
}

export default new TokenService()