import express from "express";
import { config } from 'dotenv';

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 3001;


app.listen(3001, '127.0.0.1', () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;