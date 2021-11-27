
const tableData = require("../data/tableData")
const waitListData = require("../data/waitListData")


module.exports = (app)=>{

app.get("/api/tables", (req, res)=>{
    res.json(tableData)
})

app.get("/api/reserve", (req, res)=>{
    res.json(waitListData);
})

app.post("/api/tables", (req, res)=>{
    if(tableData.length < 5){
        tableData.push(req.body)
        res.json(true)
    } else {
        waitListData.push(req.body)
        res.json(false)
    }
})


}