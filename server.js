const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getallusers', function(req, res) {
    res.send(data)
})

let data = [];
app.post('/api', function(req, res) {
    const userName = req.body.username
    const userId = req.body.userId
    const message = req.body.message
    
    const temp = {
        username: userName,
        userId,
        message
    }

    data.push(temp)
    console.log(data)

    const reply = `${userName} with id of ${userId} says ${message}`
    res.send(reply)
})

app.get('/showprofile/:username', function(req, res) {
    const user = req.params.username
    console.log(user)
    res.send('show profile working!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))