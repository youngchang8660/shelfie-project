module.exports = {
    get: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },
    getOneProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_id} = req.params
        db.get_product(product_id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    add: (req, res) => {
        const {name, price, image} = req.body
        const db = req.app.get('db')
        // console.log(name)
        db.create_product(name, price, image)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))

    },
    update: (req, res) => {
        const {id} = req.params
        const {name, price, image} = req.body
        const db = req.app.get('db')
        // console.log(name)
        db.update_product(id, name, price, image)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    delete: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        // console.log(id)
        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    }
}