


const logon = (req,res) => {
    const {name} = req.body
    if (!name) {
      return     res.status(400).json({message: 'name required'})
    }
    res.cookie('name',name)
    res.status(201).json({message: `hello ${name}`})
  }
  
const logoff = (req, res) => {
    res.clearCookie('name')
    res.status(200).json({ message: 'Logged off' })
  }

  module.exports = {logon,logoff}