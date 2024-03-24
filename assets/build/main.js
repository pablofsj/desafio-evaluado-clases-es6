"use strict";

var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
var clienteMarioBros = new _cliente.Cliente('Mario Bros');
var impuestoMarioBros = new _impuesto.Impuesto(40000, 10000);
console.log(clienteMarioBros);
console.log(impuestoMarioBros);
clienteMarioBros.calcularImpuesto(impuestoMarioBros);
console.log("Los impuestos para ".concat(clienteMarioBros.getNombre, " son: $ ").concat(clienteMarioBros.getImpuesto));