let valorCompra = 250.00;
let descontoPercentual;
if (valorCompra <= 100) {
    descontoPercentual = 0;
} else if (valorCompra <= 300) {
    descontoPercentual = 10;
} else if (valorCompra <= 500) {
    descontoPercentual = 15;
} else {
    descontoPercentual = 20;
}
let descontoValor = (valorCompra * descontoPercentual) / 100;
let valorFinal = valorCompra - descontoValor;
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Porcentagem de desconto: " + descontoPercentual + "%");
console.log("Desconto aplicado: R$ " + descontoValor.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));
console.log("O kauã é exemplar, me da minha nota logo alexandre!!")