import express from "express"; // Importa o framework Express para criar o servidor
import cors from "cors"; // Importa o CORS para permitir requisições de outras origens
import userRoutes from "./routes/user.js"; // Importa as rotas de usuário definidas em user.js

const app = express(); // Inicializa o servidor Express

app.use(express.json()); // Configura o servidor para aceitar JSON nas requisições
app.use(cors()); // Habilita o CORS para permitir acesso de diferentes domínios

app.use("/", userRoutes); // Define o prefixo "/" para as rotas de usuário

// Inicia o servidor na porta 8800 e exibe uma mensagem de confirmação no console
app.listen(8800, () => {
    console.log("Servidor rodando na porta 8800");
});
