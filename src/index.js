import app from './app';
import './database';
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("Server corriendo en el puerto", PORT));