const cvRouter = require("./cv");

function route(app) {
  app.use("/", cvRouter);
}
module.exports = route;
