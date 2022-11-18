import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarRoutes from './Routes/CarRoutes';

const app = express();
app.use(express.json());

app.use('/cars', CarRoutes);
app.use(ErrorHandler.handle);

export default app;
