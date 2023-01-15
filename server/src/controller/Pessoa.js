import {openDb} from '../configDB.js';
export default  async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE iF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY ,nome TEXT, idade INTEGER ,email TEXT,ultimoNome TEXT)')

    })

}
export async function insertPessoa(pessoa){
    openDb().then(db=>{
        db.run('INSERT INTO PESSOA (nome,idade,email,ultimoNome) VALUES(?,?,?,? )',[pessoa.nome,pessoa.idade,pessoa.email,pessoa.ultimoNome])
//metodo para inserir na base de dados 
    })

}