var express = require("express")
var app = express()
var port = process.env.PORT || 1337

app.get('/', (req, res) => {
    res.send(`
        <form action="/info" method="get">
            <input type="text" name="first_name" />
            <button type="submit">Send form</button>
        </form>
    `)
})

app.get('/info', (req, res) => {
    res.json({
        type: "ok", 
        info: {
            first_name: req.query.first_name
        }
    })
})

app.listen(port, () => {
    console.log("Server listening")
})