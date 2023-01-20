import {openDb} from '../configDB.js';
export default  async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE iF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY ,nome TEXT, email TEXT,ultimoNome TEXT, contacto TEXT)')
//metodo para icriar base de dados 
    })

}
export async function insertPessoa(pessoa){
    openDb().then(db=>{
        db.run('INSERT INTO PESSOA (nome,email,ultimoNome,contacto) VALUES(?,?,?,?,? )',[pessoa.nome,pessoa.idade,pessoa.email,pessoa.ultimoNome])
//metodo para inserir na base de dados 
    })

}

export async function selectPessoa(){
   return openDb().then(db=>{
      return  db.all('SELECT * FROM PESSOA')
      .then(res=>res)
//metodo para trazer todas as pessoas da bd 
    });

}


