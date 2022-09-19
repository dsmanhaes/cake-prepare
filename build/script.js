"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Bolo_1 = require("./Bolo");
var prompt = PromptSync();
var tamanho = Number(prompt('Digite o tamanho do bolo: '));
var sabor = prompt('Digite o sabor do bolo: ');
var formato = prompt('Digite o formato do bolo: ');
var recheio = prompt('Digite o recheio do bolo: ');
var cobertura = prompt('Digite a cobertura do bolo: ');
var valor = Number(prompt('Digite o valor do bolo: '));
var fatias = Number(prompt('Digite a quantidade de fatias do bolo: '));
var bolo = new Bolo_1.Bolo({
    tamanho: tamanho,
    cobertura: cobertura,
    formato: formato,
    recheio: recheio,
    sabor: sabor,
    valor: valor
});
bolo.fatiar(fatias);
console.log("Bolo de ".concat(sabor, " com ").concat(recheio, ": R$").concat(valor, " e ainda restam ").concat(bolo.fatias, " fatias"));
