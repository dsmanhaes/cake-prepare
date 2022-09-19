"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bolo = void 0;
var Bolo = /** @class */ (function () {
    function Bolo(_a) {
        var tamanho = _a.tamanho, sabor = _a.sabor, formato = _a.formato, recheio = _a.recheio, cobertura = _a.cobertura, valor = _a.valor;
        this.qtdFatias = 0;
        this.cobertura = cobertura;
        this.formato = formato;
        this.recheio = recheio;
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.valor = valor;
    }
    Object.defineProperty(Bolo.prototype, "fatias", {
        get: function () {
            return this.qtdFatias;
        },
        enumerable: false,
        configurable: true
    });
    Bolo.prototype.fatiar = function (qtdFatias) {
        this.qtdFatias = qtdFatias;
    };
    Bolo.prototype.tirarFatia = function () {
        this.qtdFatias--;
    };
    return Bolo;
}());
exports.Bolo = Bolo;
