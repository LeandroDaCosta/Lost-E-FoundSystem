import {openDb} from '../configDB.js';
export default  async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE iF NOT EXISTS Item (idItem INTEGER PRIMARY KEY ,nome TEXT, local TEXT ,categoria TEXT,imagem TEXT, idp INTEGER, contacto TEXT, data DATA)')

    })

}
export async function insertItem(Item){
    openDb().then(db=>{
        db.run('INSERT INTO Item (nome,local,categoria,imagem,idp,contacto,data) VALUES(?,?,?,?,?,?,? )',[Item.nome,Item.local,Item.categoria,Item.imagem,Item.idp, Item.contacto ,Item.data])
//metodo para inserir na base de dados 
    })

}

export async function selectItem(){
   return openDb().then(db=>{
      return  db.all('SELECT * FROM Item')
      .then(res=>res)
//metodo para trazer todas as pessoas da bd 
    });
}



export async function deleteItem(id){
   return openDb().then(db=>{
      return  db.get('DELETE FROM Item where id=?', [id])
      .then(res=>res)
      
    });

}
