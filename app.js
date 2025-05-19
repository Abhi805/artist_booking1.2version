import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from "./routes/admin.js";
import artistRoutes from './routes/artistRoutes.js';
// import vendorRoutes from './routes/vendorRoutes.js';

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/artists', artistRoutes);

export default app;
  