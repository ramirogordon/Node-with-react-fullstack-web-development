const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

// De esta manera conectamos nuestra app con mongoDB.Atlas
mongoose.connect(keys.mongoURI);

// Levantamos nuestra aplicacion express
const app = express();

// Aplicamos las rutas que va a tener nuestra aplicacion
require("./routes/authRoutes")(app);

// Le decimos a nuestra aplicacion que se habra
// en el puerto 5000 del localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT);
