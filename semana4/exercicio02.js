//Class com metodo


class Quadrado {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Quadrado(10, 10);

console.log(quadrado.area+"m de area do quadrado");