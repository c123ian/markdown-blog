const express = require('express')
//  ./ means its a relative path > inside routes folder and get artcile
const artcileRouter = require('./routes/articles')
//get app var
const app = express()

//view engine
//set view as ejs -> converts to html by engine
app.set('view engine', 'ejs')

app.use('/articles', artcileRouter)


//route, / is the INDEX ROUTE (main route) get req and send a res
app.get('/', (req, res) => {
    const articles = [{
        title: "Test Cian Article",
        createdAt: Date.now(),
        descripion: 'bla bla description'
    }]
    res.render('index', { articles: articles})
})

//start app on port 5000
app.listen(5001)
