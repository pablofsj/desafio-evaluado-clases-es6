
import {Cliente} from './cliente.js'
import {Impuesto} from './impuesto.js'

const clienteMarioBros = new Cliente ('Mario Bros')
const impuestoMarioBros = new Impuesto (40000, 10000)



console.log(clienteMarioBros)
console.log(impuestoMarioBros)

clienteMarioBros.calcularImpuesto(impuestoMarioBros);

console.log( `Los impuestos para ${clienteMarioBros.getNombre} son: $ ${clienteMarioBros.getImpuesto}` );