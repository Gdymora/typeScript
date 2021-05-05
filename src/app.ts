import express from 'express';

require("dotenv").config();
declare var process: {
  env: {
    PORT: number; 
    HOST: string;
  };
};
const port = process.env.PORT;
const host = process.env.HOST;

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Start progect express!');
});

app.listen(port, host, () => {
  console.log(`Example - app listening at ${host}:${port}`);
});