const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/pets/:pet', (req, res) => {
  res.send(path.relative(process.cwd(), __filename))
})

module.exports = router
