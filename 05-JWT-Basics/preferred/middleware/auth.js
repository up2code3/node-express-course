const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { name: decoded.name }
    next()
  } catch (error) {
    return res.status(401).json({ message: 'unauthorized' })
  }
}

module.exports = auth