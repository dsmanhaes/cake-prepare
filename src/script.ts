import PromptSync = require('prompt-sync');
import { Bolo } from "./Bolo";

const prompt = PromptSync();

const tamanho = Number(prompt('Digite o tamanho do bolo: '));
const sabor = prompt('Digite o sabor do bolo: ');
const formato = prompt('Digite o formato do bolo: ');
const recheio = prompt('Digite o recheio do bolo: ');
const cobertura = prompt('Digite a cobertura do bolo: ');
const valor = Number(prompt('Digite o valor do bolo: '));
const fatias = Number(prompt('Digite a quantidade de fatias do bolo: '));

const bolo = new Bolo({
  tamanho,
  cobertura,
  formato,
  recheio,
  sabor,
  valor
});

bolo.fatiar(fatias);

console.log(`Bolo de ${sabor} com ${recheio}: R$${valor} e ainda restam ${bolo.fatias} fatias`);
