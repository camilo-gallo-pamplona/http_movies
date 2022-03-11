const httpConection = require("../../utils/http");
const config = require("../../config/varibleGlobals");

module.exports = async () => {
  console.log(
    "this is my response =>>>>>>>",
    await httpConection(config.PATH_CATEGORY, "girls")
  );
};
