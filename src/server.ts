import "dotenv/config";
import express from 'express'
import routes from './routes';

const app = express(),
  port = process.env.PORT|| 4000;


app
.use(express.json())
.use(routes)
.listen(port, () => console.log(`Server is running on PORT: ${port}`));
