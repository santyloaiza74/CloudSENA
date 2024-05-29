"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var router = require('express').Router();
var proyectoController = require('../controllers/proyecto.controller');
var proyectoSchema = require('../database/models/proyecto.model');
var multer = require('multer');
var fs = require('node:fs');
var path = require('path');
var controller = new proyectoController();
var publicDir = path.resolve(__dirname, '../../public');
var nodemailer = require('nodemailer');
var crypto = require('crypto');

// Configuración del transporte SMTP

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.ADDRESS_EMAIL,
    pass: process.env.PASSWORD_EMAIL
  }
});

// Función para enviar correo electrónico
var sendEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(to, subject, text) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return transporter.sendMail({
            from: process.env.ADDRESS_EMAIL,
            to: to,
            subject: subject,
            html: text
          });
        case 3:
          console.log('Correo enviado con éxito');
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Error al enviar el correo:', _context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function sendEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
//Genrar codigo de confirmacion

var generateConfirmationCode = function generateConfirmationCode() {
  return crypto.randomBytes(3).toString('hex');
};
var deleteFiles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(filePaths) {
    var _iterator, _step, filePath, ext, folder, fullPath;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _iterator = _createForOfIteratorHelper(filePaths);
          _context2.prev = 2;
          _iterator.s();
        case 4:
          if ((_step = _iterator.n()).done) {
            _context2.next = 14;
            break;
          }
          filePath = _step.value;
          ext = path.extname(filePath);
          folder = void 0;
          if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            folder = 'Img';
          } else if (ext === '.mp4') {
            folder = 'Video';
          } else if (ext === '.pdf' || ext === '.docx') {
            folder = 'Doc';
          }
          fullPath = path.join(publicDir, folder, path.basename(filePath));
          _context2.next = 12;
          return fs.promises.unlink(fullPath);
        case 12:
          _context2.next = 4;
          break;
        case 14:
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          _iterator.e(_context2.t0);
        case 19:
          _context2.prev = 19;
          _iterator.f();
          return _context2.finish(19);
        case 22:
          console.log('Archivos eliminados con éxito');
          _context2.next = 28;
          break;
        case 25:
          _context2.prev = 25;
          _context2.t1 = _context2["catch"](0);
          console.error('Error al eliminar archivos:', _context2.t1);
        case 28:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 25], [2, 16, 19, 22]]);
  }));
  return function deleteFiles(_x4) {
    return _ref2.apply(this, arguments);
  };
}();
var storage = multer.diskStorage({
  destination: './public',
  filename: function filename(req, file, cb) {
    var originalFilename = file.originalname;
    var extension = path.extname(originalFilename);
    var filename = "".concat(Date.now()).concat(extension);
    cb(null, filename);
  }
});
var limits = {
  files: 5,
  fileSize: 150 * 1024 * 1024
};
var upload = multer({
  storage: storage,
  limits: limits
});
router.get('/', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var proyectos;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return controller.index();
        case 2:
          proyectos = _context3.sent;
          res.json({
            proyectos: proyectos
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/', upload.array('files', 5), /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, projectName, autores, ficha, fecha, descripcion, img, doc, video, existingProject, fecha1, formattedDate, proyecto;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, projectName = _req$body.projectName, autores = _req$body.autores, ficha = _req$body.ficha, fecha = _req$body.fecha, descripcion = _req$body.descripcion;
          img = [];
          doc = [];
          video = [];
          req.files.forEach(function (file) {
            var ext = path.extname(file.originalname);
            var filePath = path.join(publicDir, ext === '.jpg' || ext === '.jpeg' || ext === '.png' ? '/Img' : ext === '.mp4' ? '/Video' : '/Doc', file.filename);
            fs.renameSync(path.join(publicDir, file.filename), filePath);
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
              img.push("http://localhost:3300/Img/".concat(file.filename));
            } else if (ext === '.mp4') {
              video.push("http://localhost:3300/Video/".concat(file.filename));
            } else if (ext === '.pdf' || ext === '.docx') {
              doc.push("http://localhost:3300/Doc/".concat(file.filename));
            }
          });
          if (!(!req.files || req.files.length === 0)) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(400).send('No se subieron archivos.'));
        case 7:
          _context4.next = 9;
          return proyectoSchema.findOne({
            nombre: projectName
          });
        case 9:
          existingProject = _context4.sent;
          if (!existingProject) {
            _context4.next = 16;
            break;
          }
          _context4.next = 13;
          return deleteFiles([].concat(img, video, doc));
        case 13:
          return _context4.abrupt("return", res.status(400).json({
            message: "El nombre ya se encuentra registrado"
          }));
        case 16:
          // Formatear la fecha a DD/MM/AAAA
          fecha1 = new Date(fecha);
          formattedDate = "".concat(fecha1.getDate(), "/").concat(fecha1.getMonth() + 1, "/").concat(fecha1.getFullYear());
          proyecto = new proyectoSchema({
            nombre: projectName,
            autores: autores,
            ficha: [ficha],
            fecha: formattedDate,
            // Guardar la fecha formateada
            descripcion: descripcion,
            documentacion: doc,
            imagenes: img,
            video: video
          });
          _context4.next = 21;
          return controller.create(proyecto);
        case 21:
          img.length = 0;
          video.length = 0;
          doc.length = 0;
          res.status(201).json({
            proyecto: proyecto,
            message: "Archivos subidos exitosamente."
          });
        case 25:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.get('/:id', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, proyecto;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return controller.getById(id);
        case 3:
          proyecto = _context5.sent;
          res.json({
            proyecto: proyecto
          });
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
router.put('/:id', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, _req$body2, projectName, autores, ficha, fecha, descripcion, values, nombredup, proyecto;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, projectName = _req$body2.projectName, autores = _req$body2.autores, ficha = _req$body2.ficha, fecha = _req$body2.fecha, descripcion = _req$body2.descripcion;
          values = {};
          _context6.next = 5;
          return proyectoSchema.findOne({
            nombre: projectName
          });
        case 5:
          nombredup = _context6.sent;
          if (!nombredup) {
            _context6.next = 8;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "El nombre ya se encuentra registrado"
          }));
        case 8:
          if (projectName) values.projectName = projectName;
          if (autores) values.autores = autores;
          if (ficha) values.idficha = ficha;
          if (fecha) values.fecha = fecha;
          if (descripcion) values.descripcion = descripcion;
          _context6.prev = 13;
          _context6.next = 16;
          return controller.update(id, values);
        case 16:
          proyecto = _context6.sent;
          res.status(200).json({
            proyecto: proyecto
          });
          _context6.next = 23;
          break;
        case 20:
          _context6.prev = 20;
          _context6.t0 = _context6["catch"](13);
          res.status(404).json({
            message: _context6.t0.message
          });
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[13, 20]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
router.post('/:id/send-code', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, proyecto, confirmationCode, email, subject, text;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return controller.getById(id);
        case 4:
          proyecto = _context7.sent;
          if (proyecto) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: 'Proyecto no encontrado'
          }));
        case 7:
          // Generar código de confirmación
          confirmationCode = generateConfirmationCode();
          _context7.next = 10;
          return proyectoSchema.updateOne({
            _id: id
          }, {
            confirmationCode: confirmationCode
          });
        case 10:
          // Enviar correo de confirmación
          email = 'santyloaiza74@gmail.com'; // Correo del destinatario
          subject = 'Confirmación de eliminación de proyecto'; // Asunto del correo
          text = "\n        <!DOCTYPE html>\n        <html lang=\"es\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <style>\n                body {\n                    font-family: Arial, sans-serif;\n                    color: #333;\n                    line-height: 1.6;\n                }\n                .container {\n                    background-color: #f9f9f9;\n                    padding: 20px;\n                    border-radius: 5px;\n                }\n                .header {\n                    background-color: #4CAF50;\n                    color: white;\n                    padding: 10px;\n                    text-align: center;\n                    border-radius: 5px 5px 0 0;\n                }\n                .content {\n                    padding: 20px;\n                }\n                .footer {\n                    margin-top: 20px;\n                    text-align: center;\n                    font-size: 0.9em;\n                    color: #777;\n                }\n                .confirmation-code {\n                    font-weight: bold;\n                    color: #d9534f;\n                }\n                .logo {\n                    max-width: 100px;\n                    margin-bottom: 20px;\n                }\n            </style>\n        </head>\n        <body>\n            <div class=\"container\">\n                <div class=\"header\">\n                    <h1>Eliminaci\xF3n del Proyecto</h1>\n                </div>\n                <div class=\"content\">\n                    <p>Para proceder con la eliminaci\xF3n del proyecto, por favor, utiliza el siguiente c\xF3digo de confirmaci\xF3n:</p>\n                    <p class=\"confirmation-code\">".concat(confirmationCode, "</p>\n                </div>\n                <div class=\"footer\">\n                    <p>Saludos cordiales</p>\n                </div>\n            </div>\n        </body>\n        </html>\n        ");
          _context7.next = 15;
          return sendEmail(email, subject, text);
        case 15:
          return _context7.abrupt("return", res.status(200).json({
            message: 'Código de confirmación enviado con éxito'
          }));
        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7["catch"](1);
          res.status(500).json({
            message: 'Error al enviar el código de confirmación' + _context7.t0
          });
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 18]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
router["delete"]('/:id', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, confirmationCode, proyecto;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          confirmationCode = req.query.confirmationCode;
          _context8.prev = 2;
          _context8.next = 5;
          return controller.getById(id);
        case 5:
          proyecto = _context8.sent;
          if (proyecto) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: 'Proyecto no encontrado'
          }));
        case 8:
          if (!(confirmationCode === proyecto.confirmationCode)) {
            _context8.next = 14;
            break;
          }
          _context8.next = 11;
          return controller.remove(id);
        case 11:
          return _context8.abrupt("return", res.status(200).json({
            message: 'Proyecto eliminado exitosamente'
          }));
        case 14:
          return _context8.abrupt("return", res.status(400).json({
            message: 'Código de confirmación incorrecto'
          }));
        case 15:
          _context8.next = 20;
          break;
        case 17:
          _context8.prev = 17;
          _context8.t0 = _context8["catch"](2);
          res.status(500).json({
            message: 'Error al eliminar el proyecto'
          });
        case 20:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 17]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
module.exports = router;