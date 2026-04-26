const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
    path: path.resolve(__dirname, "..", ".env")
});

const express = require("express");
const userRoutes = require("./routes/user.routes");

const PORT = process.env.PORT
const publicPath = path.join(__dirname, "..", "public");
const pagesPath = path.join(publicPath, "pages");
const assetsPath = path.join(publicPath, "assets");

const app = express();

app.use(express.json());

app.listen(PORT, function(){
    console.log(`Rodando em http://localhost:${PORT}`);
})

// Rotas //
app.use("/", express.static(pagesPath));
app.use("/assets", express.static(assetsPath));

app.use("/users", userRoutes);