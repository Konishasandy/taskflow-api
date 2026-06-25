import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import taskRouter from './src/routes/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tasks', taskRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`TaskFlow API running on port ${PORT}`);
});
