const { Schema, model } = require("mongoose");

// Definicion de como queremos que sea la coleccion Users en mongoDB
const userSchema = new Schema({
  googleId: String,
  name: String,
  height: Number,
  age: Number
});

// Definimos que nuestra coleccion de users en mongoDB se llama 'users'
// y que como estructura tendra 'userSchema'
model("users", userSchema);
