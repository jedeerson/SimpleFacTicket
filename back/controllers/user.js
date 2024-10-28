import { db } from "../db.js"; // Importa a instância de conexão com o banco de dados

// Função para obter todos os usuários do banco de dados
export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios"; // Define a query SQL para selecionar todos os registros da tabela 'usuarios'

  db.query(q, (err, data) => { // Executa a query e trata o resultado
    if (err) return res.status(500).json({ error: err.message }); // Retorna erro se ocorrer

    return res.status(200).json(data); // Retorna os dados obtidos em formato JSON com status 200 (sucesso)
  });
};

// Função para adicionar um novo usuário ao banco de dados
export const addUser = (req, res) => {
  const q = "INSERT INTO usuarios (nome, email, fone, data_nascimento) VALUES (?)"; // Query para inserir um novo usuário

  // Captura os dados do usuário a partir do corpo da requisição
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => { // Executa a query com os valores fornecidos
    if (err) return res.status(500).json({ error: err.message }); // Retorna erro se houver problemas na execução

    return res.status(200).json("Usuário criado com sucesso!"); // Retorna mensagem de sucesso
  });
};

// Função para atualizar um usuário existente no banco de dados
export const updateUser = (req, res) => {
  const q = "UPDATE usuarios SET nome = ?, email = ?, fone = ?, data_nascimento = ? WHERE id = ?"; // Query para atualizar os dados de um usuário pelo ID

  // Captura os novos dados do usuário a partir do corpo da requisição
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => { // Executa a query com os valores atualizados e o ID do usuário
    if (err) return res.status(500).json({ error: err.message }); // Retorna erro se ocorrer falha na execução

    return res.status(200).json("Usuário atualizado com sucesso!"); // Retorna mensagem de sucesso
  });
};

// Função para deletar um usuário do banco de dados pelo ID
export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE id = ?"; // Query para deletar um usuário com base no ID

  db.query(q, [req.params.id], (err) => { // Executa a query com o ID fornecido na requisição
    if (err) return res.status(500).json({ error: err.message }); // Retorna erro se houver falha

    return res.status(200).json("Usuário deletado com sucesso!"); // Retorna mensagem de sucesso
  });
};
