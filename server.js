import express from "express"
import path from "path"

const app = express()
const PORT = 3000

// Define o diretório dos arquivos estáticos (HTML, CSS, JS)
const __dirname = path.resolve() // Corrige o caminho no ES Modules
app.use(express.static(path.join(__dirname, "src")))

// Rota principal - Servindo o index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
