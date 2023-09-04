const homeRouter = require ("express").Router();

homeRouter.get("/Home", (req, res) => {
    res.status(200).send()
}).post("/", (req,res) => {
    res.status(200).send("success");
} ).put ("/:id", (req, res) => {
    res.status(200).send()
} );


module.exports = homeRouter

