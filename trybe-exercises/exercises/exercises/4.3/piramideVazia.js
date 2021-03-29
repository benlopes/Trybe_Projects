// asteriscos-base
let starBase = 9;

// linhas (L) a serem impressas em função (FX) da base
let lines1 = Math.ceil(starBase/2);

// iteração para impressão da pirâmide vazia
for(let index = 0; index < lines1; index += 1) {
  
  // espaços externos (EE) a serem impressos FX das L e do index (IN)
  let spaces1 = ' '.repeat(lines1 - (index + 1));
  
  // imprime EE e completamente a 1a e a última L
  if (index == 0 || index == (lines1 - 1)) {
    console.log((spaces1).concat('*'.repeat((2 * index) + 1)));;
  }

  // imprime EE, asteriscos-borda e espaços internos (FX do IN)
  else { 
    console.log((spaces1).concat(('*').concat((' '.repeat((2 * index) - 1)) + '*')));
  }
}
