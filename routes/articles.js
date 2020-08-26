const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new')

})

//NOW USE ROUTER METHOD TO PASS PATSHS

//need to export to let app know to use router
module.exports = router
