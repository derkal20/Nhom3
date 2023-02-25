const express = require("express");
const handlerbars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");
const route = require("./routes");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "hbs",
  handlerbars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "./views"));
route(app);
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
