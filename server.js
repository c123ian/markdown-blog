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
        createdAt: new Date(),
        descripion: 'bla bla description'
    },
    {
        title: "Test Cian Article 2",
        createdAt: new Date(),
        descripion: 'bla bla description 2'
    }]
    res.render('index', { articles: articles })
})

//start app on port 50000
app.listen(5000)
