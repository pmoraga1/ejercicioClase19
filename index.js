const express = require ("express")
const app = express()
require("dotenv").config()  // para acceder a las variables de entorno .env

const puerto = process.env.PORT  // process es el proceso global para acceder al entorno

app.use(express.json()) // middleware

app.post("/products", (req, res)=>{
const productoDesdeElFront = req.body
console.log(productoDesdeElFront)
res.status(201).json({
    mensaje : "producto creado" 
})
})

app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}`)
} ) 

