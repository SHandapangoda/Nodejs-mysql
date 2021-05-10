
const express = require('express');
const app = express();
const sql = require('mysql');
const cors = require('cors');


const db = sql.createPool(
    {
        host:"localhost",
        username:"root",
        password:"",
        database:"newdatabase"
    }
);

app.use(cors());
app.use(express.json())

app.get('/api/get',(res,req) => {
    
    const sqlSelect = 'SELECT * FROM reviews;';
    db.query(sqlSelect,[Name,rev],(err,result) => {
        res.send(result)
    })
})

app.post('/api/insert',(req,res) => {
const Name = req.body.Name
const rev = req.body.rev    
const sqlInsert = "INSERT INTO reviews (name, review) VALUES (?,?);";
db.query(sqlInsert,[Name,rev], (err,result) =>{
    console.log(result)

})

app.delete('api/delete',(req,res) => {
    const Name = req.body.Name


    const sqlDelete = ""
    db.query(sqlDelete,[Name,rev], (err,result) => {
        console.log(result)
    })
})


});

app.listen(2501,()=>{
    console.log('Server running @ 2501');
});