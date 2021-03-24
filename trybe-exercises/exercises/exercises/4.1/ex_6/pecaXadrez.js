let peca = 555555;

peca = peca.toLowerCase()

if (peca !== 'king' && peca !== 'queen' && peca !== 'bishop' && peca !== 'rook' && peca !== 'knight' && peca !== 'pawn') {
    console.log('Você não digitou o nome de uma peça ou digitou com algum erro ortográfico.');
    return;
}

switch(peca) {
    case 'king':
        console.log('King -> Any direction, one cell');
        break;
    case 'queen':
        console.log('Queen -> Any direction');
        break;
    case 'bishop':
        console.log('Bishop -> Diagonals');
        break;
    case 'rook':
        console.log('Rook -> Straight, left or right');
        break;
    case 'knight':
        console.log('Knight -> L shaped and jump over other pieces if needed');
        break;
    case 'pawn':
        console.log('Pawn -> Straight, one cell');
        break;
}