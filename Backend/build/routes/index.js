"use strict";

var _require = require('express'),
  Router = _require.Router;
var loginRouter = require('./login.routes');
var fichaRouter = require('./ficha.routes');
var gestorRouter = require('./gestor.routes');
var proyectoRouter = require('./proyecto.routes');
var rolRouter = require('./rol.routes');
var _require2 = require('../function/jwt/proteccionrutas'),
  validateToken = _require2.validateToken;
function routerApi(app) {
  var router = Router();
  app.use('/api/v1', router);
  router.use('/login', loginRouter);
  router.use('/ficha', fichaRouter);
  router.use('/gestor', gestorRouter);
  router.use('/proyecto', proyectoRouter);
  router.use('/rol', rolRouter);
  app.use('/login', loginRouter);
}
module.exports = routerApi;