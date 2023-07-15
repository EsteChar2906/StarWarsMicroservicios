const { catchedAsync } = require("../utils");

module.exports = {
  getData: catchedAsync(require("./getDataControllers.js")),
  getDataById: catchedAsync(require("./getDataByIdControllers.js")),
  createData: catchedAsync(require("./createDataControllers.js")),
};
