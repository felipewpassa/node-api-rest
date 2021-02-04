const processEnv = require("process-env");
processEnv.loadEnvConfig(__dirname);

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const routes = require("./src/routes");
app.use(routes);

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
