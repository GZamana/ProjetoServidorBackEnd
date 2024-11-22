import express from "express";
import multer from "multer";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads" , storage})

const routes = (app) => {
    // Permite que o Express entenda requisições com corpo no formato JSON
    app.use(express.json()); 
    app.use(cors(corsOptions))
    // Rota para obter todos os posts
    app.get("/posts", listarPosts );
    // Rota para criar um post
    app.post("/posts", postarNovoPost )
    app.post("/upload", upload.single("imagem"), uploadImagem )
    app.put("/upload/:id", atualizarNovoPost )
};

export default routes;