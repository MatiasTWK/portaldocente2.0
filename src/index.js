const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user");
const cors = require('cors');
const cursoRoutes = require("./routes/curso");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors())

//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', cursoRoutes);

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//RUTAS
app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});


//CONEXION A MONGODB
mongoose
    .connect(process.env.MONGODB_URI).then(() => console.log("Conexion Completada"))
    .catch((error) => console.error(error));
app.listen(port, () => console.log('server listo en puerto', port)); 