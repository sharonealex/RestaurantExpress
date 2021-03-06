const express = require("express");
const fs = require("fs")
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`app listening on ${PORT}`)
})



htmlRoutes(app);
apiRoutes(app);