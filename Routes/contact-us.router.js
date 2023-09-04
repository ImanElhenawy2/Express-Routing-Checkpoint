const contactUsRouter = require ("express").Router();

contactUsRouter.get("/Contact-us", (req, res) => {
    res.status(200).send()
}).post("/", (req,res) => {
    res.status(200).send("success");
} ).put ("/:id", (req, res) => {
    res.status(200).send()
} );


module.exports = contactUsRouter;