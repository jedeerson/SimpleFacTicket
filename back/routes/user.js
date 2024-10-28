import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js"; // Importa os métodos do controlador de usuário

const router = express.Router(); // Inicializa o roteador do Express

// Rota para obter todos os usuários
router.get("/", getUsers); // Quando a rota "/" é acessada com GET, executa getUsers

// Rota para adicionar um novo usuário
router.post("/", addUser); // Quando a rota "/" é acessada com POST, executa addUser

// Rota para atualizar um usuário específico
router.put("/:id", updateUser); // Quando a rota "/:id" é acessada com PUT, executa updateUser (id é o parâmetro do usuário a ser atualizado)

// Rota para deletar um usuário específico
router.delete("/:id", deleteUser); // Quando a rota "/:id" é acessada com DELETE, executa deleteUser (id é o parâmetro do usuário a ser deletado)

export default router; // Exporta o roteador para uso em outras partes da aplicação
