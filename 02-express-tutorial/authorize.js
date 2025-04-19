
const auth = (req,res,next) => {
    if(req.cookies.name) {
      req.user = req.cookies.name
      next()
    }else{
      res.status(401).json({message: 'unauthorized'})
    }
  }

module.exports = auth