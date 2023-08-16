const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

const port = 3001

const home = (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, "pages", "home.html"))
}

const contacts = (req, res) => {
    const type = req.query.type
    if (type === "form") {
        res.sendFile(path.join(__dirname, "pages","contact-form.html"))
    }else {
        res.send("Texto Contato")
    }
}

const products = ["banana", "coca-cola", "macarrão", "uva"]

const product = (req, res) => {
    const id = req.query.id
    if ( id < 0 || id >= products.length) {
        res.status(404)
        res.send("Product not found")
        return
    } 
    res.send(products[id])
}

app.get('/', home)
app.get('/contacts', contacts)
app.get("/product", product)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})