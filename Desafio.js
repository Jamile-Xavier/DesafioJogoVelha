/**
 * O método analisa o registro de uma partida de jogo da velha e determina
 * quem venceu.
 * 
 * @param partida {String}
 *   A partida é registrada numa sequência de coordenadas separadas por
 *   espaços:
 *   
 *     "x:2,2 o:2,1 x:3,3 o:1,1 x:3,1 o:1,3 x:3,2"
 *       
 *   Cada coordenada é formada da seguinte forma:
 *   
 *     - O símbolo do jogador seguido de dois pontos: 'x:' ou 'o:'
 *     - A coordenada da linha e da coluna escolhida pelo jogador.
 *       Os índices das linhas e das colunas variam entre 1 e 3.
 * 
 * @return {Number}
 *   O resultado é um inteiro identificando o empate ou o jogador vencedor da
 *   seguinte forma:
 *     -1  O jogador 'x' venceu a partida.
 *      0  Nenhum jogador venceu a partida.
 *      1  O jogador 'o' venceu a partida. 
 */
function quemVenceu(partida) {
  var jogadas = partida.split(" ");

  var jogadasX = [];
  var jogadasO = [];
  for (var i = 0; i < jogadas.length; i++) {
    if (jogadas[i].includes('x:')) {
      jogadasX.push(jogadas[i].replace('x:', ''));
    } else {
      jogadasO.push(jogadas[i].replace('o:', ''));
    }
  }

  if (validacaoJogada(jogadasX)) {
    return -1;
  } else if (validacaoJogada(jogadasO)) {
    return 1;
  } else {
    return 0;
  }
};
function validacaoJogada(jogadas) {
  var linhas = (['1,1', '1,2', '1,3']).every(x => jogadas.includes(x)) || (['2,1', '2,2', '2,3']).every(x => jogadas.includes(x)) || (['3,1', '3,2', '3,3']).every(x => jogadas.includes(x));
  var colunas = (['1,1', '2,1', '3,1']).every(x => jogadas.includes(x)) || (['1,2', '2,2', '3,2']).every(x => jogadas.includes(x)) || (['1,3,', '2,3', '3,3']).every(x => jogadas.includes(x));
  var diagonais = (['1,1', '2,2', '3,3']).every(x => jogadas.includes(x)) || (['3,1,', '2,2', '1,3']).every(x => jogadas.includes(x));
  return (linhas || colunas || diagonais);
}


//
// Use este teste como referência de uso do método 'quemVenceu'.
// Se `console.log` não existir comente a linha ou faça o teste do seu jeito.
//
var partida = null;
var vencedor = 0;

partida = 'x:2,2 o:2,1 x:3,3 o:1,1 x:3,1 o:1,3 x:3,2';
vencedor = quemVenceu(partida);
console.log('x venceu..: ' + (vencedor === -1));

partida = 'x:1,1 o:3,3 x:2,2 o:3,1 x:3,2 o:1,2 x:2,1 o:2,3 x:1,3';
vencedor = quemVenceu(partida);
console.log('deu velha.: ' + (vencedor === 0));

partida = 'x:1,1 o:2,3 x:3,3 o:2,2 x:3,1 o:2,1';
vencedor = quemVenceu(partida);
console.log('o venceu..: ' + (vencedor === 1));


