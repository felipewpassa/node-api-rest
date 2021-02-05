require("dotenv").config();

const port = process.env.PORT || 3000;
const app = require("./app");

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
