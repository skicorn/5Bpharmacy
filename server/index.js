import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud1"
})

app.get('/staff', (req,res)=>{
    const sql="SELECT * FROM staff";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})
app.post('/addstaff',(req,res)=>{
    const sql="INSERT INTO staff ('Name','ID','Phone','Email','Rolde') VALUES (?)";
    const vlaues=[
        req.body.name,
        req.body.id,
        req.body.phone,
        req.body.email,
        req.body.role    
    ]
    db.query(sql,[vlaues],(err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})
app.listen(8081,()=>{
    console.log("Listening");
})