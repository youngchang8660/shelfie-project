require('dotenv').config()
const express = require('express')
const app = express();
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const port = SERVER_PORT;
const ctrl = require('./controller')
const cors = require('cors')

app.use(express.json())
app.use(cors())

massive({
 connectionString: CONNECTION_STRING,
 ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.get('/api/product/:product_id', ctrl.getOneProduct)
app.get('/api/inventory', ctrl.get)
app.post('/api/inventory', ctrl.add)
app.delete('/api/inventory/:id', ctrl.delete)
app.put('/api/inventory/:id', ctrl.update)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
