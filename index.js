const express = require('express')
const app = express() 

const posts = require('./posts')

const erlang = require('erlang-c-js')
let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.use(logger)

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post('/postTest', (req, res) => {
    res.json({
        "message" : "Hello World"
    })
})

app.get('/', (req, res) => {
    res.send('Api is runnning now.')
})

const erlangRouter = require('./routes/erlang')
app.use('/erlang', erlangRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(process.env.PORT || 3000, () => console.log("Relax, your server is running"))