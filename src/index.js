import express from 'express';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hellooo World!!!")
})

app.listen(PORT, () => console.log("Server corriendo en el puerto", PORT));