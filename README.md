# 🎮 Jogo da Velha

Um jogo da velha clássico desenvolvido com HTML, CSS e JavaScript puro. Interface moderna e responsiva para uma experiência de jogo divertida e intuitiva.

## 📋 Sobre o Projeto

Este é um jogo da velha (Tic-Tac-Toe) implementado com tecnologias web front-end. O jogo permite que dois jogadores se alternem entre X e O, com detecção automática de vitória, empate e reinício de partida.

## ✨ Funcionalidades

- 🎯 Jogo para dois jogadores (X e O)
- 🏆 Detecção automática de vitória
- 🤝 Detecção de empate
- 🔄 Botão para reiniciar a partida
- 📱 Interface responsiva
- 🎨 Design moderno e atrativo
- ⚡ Feedback visual em tempo real

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Não requer instalação de dependências

### Executando o Projeto

1. **Clone ou baixe o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd aws
   ```

2. **Abra o arquivo HTML**
   - Abra o arquivo `index.html` diretamente no seu navegador
   - Ou use um servidor local como Live Server (VS Code) ou Python:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **Acesse o jogo**
   - Se abriu diretamente: o jogo já estará funcionando
   - Se usando servidor local: acesse `http://localhost:8000`

## 🎮 Como Jogar

1. O jogo começa com o jogador X
2. Clique em qualquer célula vazia do tabuleiro para fazer sua jogada
3. Os jogadores se alternam automaticamente (X → O → X...)
4. O primeiro jogador a conseguir três símbolos em linha (horizontal, vertical ou diagonal) vence
5. Se todas as células forem preenchidas sem vencedor, o jogo termina em empate
6. Use o botão "Reiniciar Jogo" para começar uma nova partida

## 📁 Estrutura do Projeto

```
aws/
├── index.html      # Estrutura HTML do jogo
├── style.css       # Estilos e layout
├── script.js       # Lógica do jogo
└── README.md       # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização e layout responsivo
- **JavaScript (ES6+)**: Lógica do jogo e interatividade

## 🎨 Características Técnicas

### HTML
- Estrutura semântica e acessível
- Meta tags para responsividade
- Organização clara dos elementos

### CSS
- Design responsivo
- Flexbox para layout
- Transições suaves
- Variáveis CSS para consistência
- Hover effects para melhor UX

### JavaScript
- Manipulação do DOM
- Event listeners para interatividade
- Algoritmo de detecção de vitória
- Gerenciamento de estado do jogo
- Funções modulares e reutilizáveis

## 🔧 Funcionalidades Implementadas

- ✅ Alternância automática de jogadores
- ✅ Validação de jogadas
- ✅ Detecção de vitória (8 combinações possíveis)
- ✅ Detecção de empate
- ✅ Reinício de partida
- ✅ Feedback visual do jogador atual
- ✅ Mensagens de status do jogo
- ✅ Interface responsiva

## 🚀 Possíveis Melhorias Futuras

- 🤖 Modo single-player contra IA
- 📊 Sistema de pontuação
- 🎵 Efeitos sonoros
- 💾 Salvamento de estatísticas
- 🌙 Modo escuro/claro
- 🎨 Temas personalizáveis
- 📱 PWA (Progressive Web App)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para aprendizado e diversão.

---

⭐ Se você gostou do projeto, não esqueça de dar uma estrela!
