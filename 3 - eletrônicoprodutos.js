const prompt = require('prompt-sync')();

var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());

var item = new Produto();
item.marca = 'Samsung';
item.modelo = 'A32';
item.cor = 'Grafite';
item.pagarContas = 'Pagamento de contas no aparelho';
item.ligacoes = 'Falar com pessoas à distância';

console.log(`\nMarca: ${item.marca}`)
console.log(`\nModelo: ${item.modelo}`)
console.log(`\nCor: ${item.cor}`)
console.log(`\nFuncionalidade: ${item.pagarContas}`)
console.log(`\nFuncionalidade: ${item.ligacoes}`)

document.write("".concat(item.marca, "<br>"));
document.write("".concat(item.modelo, "<br>"));
document.write("".concat(item.cor, "<br>"));
document.write("".concat(item.pagarContas, "<br>"));
document.write("".concat(item.ligacoes));
