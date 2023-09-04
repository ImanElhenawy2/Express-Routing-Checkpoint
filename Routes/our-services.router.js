const ourServiceRouter = require ("express").Router();

ourServiceRouter.get("/Our-Service", (req, res) => {
    res.status(200).send("hello world")
}).post("/", (req,res) => {
    res.status(200).send("success");
} ).put ("/:id", (req, res) => {
    res.status(200).send()
} );


module.exports = ourServiceRouter;