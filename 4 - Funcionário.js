const prompt = require('prompt-sync')();

var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());

var pessoa = new Funcionario();
pessoa.nome = 'Maria';
pessoa.carteiraTrabalho = '6920837';
pessoa.sexo = 'feminina';
pessoa.horasTrabalho = '80 Horas semanais';
pessoa.metasVendas = ' 18 Carros por dia';

console.log(`Nome: ${pessoa.nome}`)
console.log(`Carteira de Trabalho: ${pessoa.carteiraTrabalho}`)
console.log(`Sexo: ${pessoa.sexo}`)
console.log(`Horas Trabalhadas: ${pessoa.horasTrabalho}`)
console.log('Metas Cumpridas: ${pessoa.metasVendas}`)

document.write(`${pessoa.nome}`);
document.write(`${pessoa.carteiraTrabalho}`);
document.write(`${pessoa.sexo}`);
document.write(`${pessoa.horasTrabalho}`);
document.write(`${pessoa.metasVendas}`);
