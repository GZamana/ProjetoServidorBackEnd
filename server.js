// para derrubar o servidor, colocar control c//  3000 é a porta// localhost:3000/api, coloca isso no navegador e abre o nosso servidor// AIzaSyCQJ58OYxtpHxPOdM-RBPZLjsa0Yq7Q7b8 chave API//https://aistudio.google.com/app/apikey google gemini
// --wacth não precisa mais quebrar o servidor, vai direto
// não pode ser um array para guardar dados pois a memoria é apagada depois
// env é o arquivo padrão para variável ambiente, só existe nele
// npm run dev, é o que coloca no terminal para substituir o valor que colocamos no "dev"
import express from "express";
import routes from "./src/routes/postRoutes.js";


// Cria uma instância do Express, que será nosso servidor web
const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e mostra uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 



