import { openDb } from './configDB.js';
import express from'express';
// import createTable, { insertPessoa } from './controller/Pessoa.js';
const app=express();
app.use(express.json());
//  createTable();
openDb();
app.get('/',function(req,res){
    res.send("entrando")

})
//req contem oq vem do insomnia .body traz o conteudo\

app.post('/pessoa',function(req,res){
    console.log(req.body);
    insertPessoa(req.body)
    //nsere pessoa na tabela
res.json({
"statusCode":200

})
});

app.listen(3000,()=>console.log("API RODANDO"))