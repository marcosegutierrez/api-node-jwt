import app from './app';
import morgan from 'morgan';
require('dotenv').config();

const PORT = process.env.PORT;
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("Hellooo World!!!")
})

app.listen(PORT, () => console.log("Server corriendo en el puerto", PORT));