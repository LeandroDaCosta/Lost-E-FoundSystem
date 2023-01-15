import { openDb } from './configDB.js';
import cors from "cors";
import express from "express";
import createTable, {
  insertPessoa,
  selectPessoa,
} from "./controller/Pessoa.js";
import { deleteItem, insertItem, selectItem } from "./controller/Item.js";
const app = express();
app.use(cors());
app.use(express.json());
createTable();

app.get("/", function (req, res) {
  res.send("entrando");
});
//req contem oq vem do insomnia .body traz o conteudo\
app.get("/pessoa", async function (req, res) {
  let pessoa = await selectPessoa();
  res.json(pessoa);
});

app.delete("/Item", async function (req, res) {
  let item = await deleteItem(req.body.id);
  res.json(item);
});

app.get("/pessoa", async function (req, res) {
  let pessoa = await selectPessoa();
  res.json(pessoa);
});
app.get("/Item", async function (req, res) {
  let itens = await selectItem();
  res.json(itens);
});


app.post('/pessoa',function(req,res){
    console.log(req.body);
    insertPessoa(req.body)
    //nsere pessoa na tabela
res.json({
"statusCode":300

})
});


app.post('/Item',function(req,res){
    console.log(req.body);
    insertItem(req.body)
    //nsere pessoa na tabela
res.json({
"statusCode":300

})
});
app.listen(3000,()=>console.log("API RODANDO"))