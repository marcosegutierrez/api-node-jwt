"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
var app = (0, _express["default"])();
var PORT = process.env.PORT;
app.get('/', function (req, res) {
  res.send("Hellooo World!!!");
});
app.listen(PORT, function () {
  return console.log("Server corriendo en el puerto", PORT);
});