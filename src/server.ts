import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import wilderRoutes from './routes/wilders';

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
// app.use(cors());

// database
mongoose
  .connect('mongodb://127.0.0.1:27017/wilderdb', {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err: Error) => console.log(err));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World form Mongoose');
});

app.use('/api/wilders', wilderRoutes);

// a la fin pour gerer les not found
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

// start server
app.listen(3001, () => console.log('Server started on 3001'));
