let express = require('express')
let router = express.Router()


router.get('/', function(req,res,next){
    res.json( {'message': 'testing with nodemon!'} )
})


module.exports = router