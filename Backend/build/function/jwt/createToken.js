"use strict";

var jwt = require('jsonwebtoken');
var _require = require('../../config/config'),
  secretjwt = _require.secretjwt;
function generateAcessToken(user) {
  return jwt.sign({
    id: user._id
  }, secretjwt, {
    expiresIn: 86400
  });
}
module.exports = generateAcessToken;