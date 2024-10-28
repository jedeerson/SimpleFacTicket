import mysql from "mysql2";

// Cria uma conexão com o banco de dados MySQL
export const db = mysql.createConnection({
  host: "localhost",    // Endereço do servidor do banco de dados
  user: "root",         // Nome de usuário do banco de dados
  password: "471258",   // Senha do banco de dados
  database: "crud2",    // Nome do banco de dados a ser utilizado
});
