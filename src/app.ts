import express from 'express';
require("dotenv").config();
import { testAxios } from "./module/axios-module";
import { testFetch } from "./module/fetch-module";

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

app.get('/', async function (req, res) {
  const axios = await testAxios();
  const fetch = await testFetch();

  res.send(JSON.stringify(axios) + ' ' + JSON.stringify(fetch) + 'Start progect express!');
});

app.listen(port, host, () => {
  console.log(`Example - app listening at ${host}:${port}`);
});