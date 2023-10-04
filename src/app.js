import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import { createRoles } from './libs/initialSetup';

const app = express();
createRoles(); // Crea los roles iniciales en caso de que no haya

app.set('pkg', pkg);
app.use(express.json());
app.use(morgan('dev')); // Imprime las peticiones del cliente en consola

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })

})

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

export default app;