import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app =express();
app.use(cors());
app.use(express.json());

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud1"
})
app.get('/',(req,res)=>{
    const sql="SELECT * FROM staff";
    db.query(sql,(err,result)=>{
        if(err)return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})
app.post('/staffs',(req,res)=>{
    const sql="INSERT INTO staff ('id','name','phone','email','salary','idnumber','role','adress') VALUES (?)";
    console.log(req.body);
    const vlause=[
        req.body.id,
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.salary,
        req.body.idnumber,
        req.body.role,
        req.body.adress
        ]
        db.query(sql,[vlause],(err,result)=>{
            if(err) return res.json(err);
            return res.json(result);
        })
})

app.listen(5001,()=>{
    console.log("Listening");
})