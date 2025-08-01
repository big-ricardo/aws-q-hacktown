// Elementos do DOM
const gameBoard = document.getElementById('game-board');
const cells = document.querySelectorAll('.cell');
const playerTurnElement = document.getElementById('player-turn');
const gameStatusElement = document.getElementById('game-status');
const restartBtn = document.getElementById('restart-btn');

// Estado do jogo
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Combinações vencedoras
const winningConditions = [
    [0, 1, 2], // Linha superior
    [3, 4, 5], // Linha do meio
    [6, 7, 8], // Linha inferior
    [0, 3, 6], // Coluna esquerda
    [1, 4, 7], // Coluna do meio
    [2, 5, 8], // Coluna direita
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundária
];

// Mensagens do jogo
const winningMessage = (player) => `Jogador ${player} venceu! 🎉`;
const drawMessage = () => `Empate! 🤝`;
const currentPlayerMessage = () => `Vez do jogador: ${currentPlayer}`;

// Inicializar o jogo
function initializeGame() {
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });
    restartBtn.addEventListener('click', restartGame);
    updatePlayerTurn();
}

// Lidar com clique na célula
function handleCellClick(index) {
    // Verificar se a célula já está ocupada ou se o jogo não está ativo
    if (gameState[index] !== '' || !gameActive) {
        return;
    }

    // Fazer a jogada
    makeMove(index);
    
    // Verificar resultado do jogo
    checkGameResult();
}

// Fazer uma jogada
function makeMove(index) {
    gameState[index] = currentPlayer;
    const cell = cells[index];
    
    // Atualizar visual da célula
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    cell.classList.add('disabled');
    
    // Alternar jogador
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updatePlayerTurn();
}

// Verificar resultado do jogo
function checkGameResult() {
    let roundWon = false;
    let winningCombination = [];

    // Verificar todas as combinações vencedoras
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            winningCombination = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        // Alguém venceu
        const winner = currentPlayer === 'X' ? 'O' : 'X'; // O vencedor é o jogador anterior
        gameStatusElement.textContent = winningMessage(winner);
        gameActive = false;
        
        // Destacar células vencedoras
        highlightWinningCells(winningCombination);
        
        // Desabilitar todas as células
        disableAllCells();
        return;
    }

    // Verificar empate
    if (!gameState.includes('')) {
        gameStatusElement.textContent = drawMessage();
        gameActive = false;
        disableAllCells();
        return;
    }
}

// Destacar células vencedoras
function highlightWinningCells(combination) {
    combination.forEach(index => {
        cells[index].classList.add('winning-cell');
    });
}

// Desabilitar todas as células
function disableAllCells() {
    cells.forEach(cell => {
        cell.classList.add('disabled');
    });
}

// Atualizar indicador do jogador atual
function updatePlayerTurn() {
    if (gameActive) {
        playerTurnElement.textContent = currentPlayer;
        gameStatusElement.textContent = '';
    }
}

// Reiniciar o jogo
function restartGame() {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    
    // Limpar status do jogo
    gameStatusElement.textContent = '';
    updatePlayerTurn();
    
    // Resetar todas as células
    cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell'; // Remove todas as classes exceto 'cell'
    });
}

// Inicializar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', initializeGame);
