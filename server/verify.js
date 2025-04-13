const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]

    if(!token){
        return res.json({error: "no jwt"})
    }

    jwt.verify(token, process.env.JWT, (err, decoded) => {
        if(err) {
            return res.json({error: err})
        } 

        req.userId = decoded.id
        next()
    })
}

module.exports = verifyToken