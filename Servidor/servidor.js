// Importa o módulo HTTP nativo do Node.js
const http = require('http');
// Cria o servidor HTTP
const server = http.createServer((req, res) => {
   // Define o tipo de conteúdo das respostas como texto simples
    res.setHeader('Content-Type', 'text/plain');
  // Verificar a URL da requisição e responde de acordo
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Bem-vindo a pagina inicial!');
  } else if (req.url === '/sobre') {
    res.statusCode = 200;
    res.end('Esta e a pagina Sobre.');
  } else if (req.url === '/contato') {
    res.statusCode = 200;
    res.end('Aqui voce pode entrar em contato conosco.');
  } else {
    // Responde com um status 404 para a pagina não encontrada
    res.statusCode = 404;
    res.end('Pagina nao encontrada.');
  }
});
// Define a porta do servidor em 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
