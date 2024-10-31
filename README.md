# SimpleFacTicket
Trata-se de um sistema para gerenciamento e controle de chamados internos.

## Introdução
O projeto em questão é um software para controle CRUD de chamados internos, feito em Node.js + React + MySQL. Para rodar o projeto em sua máquina, deverá conter os seguintes requisitos:
```bash
- Node.js
```
```bash
- NPM
```
```bash
- MySQL 7.*
```

## Instalação
Após clonar o projeto, no diretório raiz:
```bash
npm install
```

## Usabilidade
Para iniciar o projeto, utilize o comando:
```bash
npm start
```

Para configurar o banco de dados, crie um arquivo no diretório raiz do projeto com o nome .env seguindo o modelo do arquivo .env.example:
```bash
MYSQL_HOST=127.0.0.1
MYSQL_DB=your_db
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASS=
```

 Após isso, você poderá acessar a aplicação em:
```bash
http://localhost:3000
```

## Tecnologias e Conceitos Utilizados
O projeto segue alguns padrões de projetos e conceitos de programação orientada á objetos. São eles:
- [x] Node.js e MySQL para a lógica de back-end e armazenamento de dados
- [x] React para o front-end dinâmico e eficiente
- [x] Styled Components para estilização
- [x] React Toastify para notificações
- [x] Axios para comunicações entre front e back-end
- [x] Conceitos: Arquitetura em camadas, MVC, e Design Responsivo


