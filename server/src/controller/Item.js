import {openDb} from '../configDB.js';
export default  async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE iF NOT EXISTS Item (id INTEGER PRIMARY KEY ,nome TEXT, local TEXT ,categoria TEXT,imagem TEXT, idp INTEGER)')

    })

}
export async function insertItem(Item){
    openDb().then(db=>{
        db.run('INSERT INTO Item (nome,local,categoria,imagem,idp) VALUES(?,?,?,?,? )',[Item.nome,Item.idade,Item.email,Item.ultimoNome])
//metodo para inserir na base de dados 
    })

}