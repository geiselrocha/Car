import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarRoutes from './Routes/CarRoutes';
import MotoRoutes from './Routes/MotoRoutes';

const app = express();
app.use(express.json());

app.use('/cars', CarRoutes);
app.use('/motorcycles', MotoRoutes);
app.use(ErrorHandler.handle);

export default app;
