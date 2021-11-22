export function embaralharCartas(cartas) {
  let cartasViradas = virarCartasParaBaixo(cartas);
  for (let posicao = cartasViradas.length - 1; posicao > 0; posicao--) {
    const proximaPosicao = Math.floor(Math.random() * (posicao + 1));
    [cartasViradas[posicao], cartasViradas[proximaPosicao]] = [
      cartasViradas[proximaPosicao],
      cartasViradas[posicao],
    ];
  }

  return cartasViradas;
}

function virarCartasParaBaixo(cartas) {
  if (cartas?.length > 0) {
    for (let posicao = 0; posicao < cartas.length; posicao++) {
      if (!cartas[posicao].virada) {
        cartas[posicao].virada = true;
      }
    }
  }
  return cartas;
}
