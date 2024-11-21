// Lista de opções iniciais (com 14 opções para garantir um número par)
let options = [
    "Atletismo",
    "Natação",
    "Ginástica Artística",
    "Futebol",
    "Vôlei",
    "Basquete",
    "Handebol",
    "Ciclismo",
    "Boxe",
    "Tênis",
    "Tênis de Mesa",
    "Judô",
    "Taekwondo",
    "Esgrima",
    "Halterofilismo",
    "Polo Aquático",
    "Badminton",
    "Rugby",
    "Skateboarding",
    "Escalada Esportiva",
    "Surfe",
    "Beisebol/Softbol",
    "Hóquei sobre Grama",
    "Golfe",
    "Tiro com Arco",
    "Tiro Esportivo",
    "Canoagem",
    "Remo",
    "Vela",
    "Triatlo",
    "Pentatlo Moderno",
    "karatê",
  ];
  
  let currentRound = []; // Rodada atual
  let winners = []; // Vencedores de cada rodada
  let currentIndex = 0; // Índice atual das opções na rodada
  
  // Função para iniciar o jogo
  function startGame() {
    // Esconde a tela inicial e mostra o quiz
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".quiz").classList.remove("hidden");
  
    // Inicia a primeira rodada
    startRound();
  }
  
  // Função para iniciar uma nova rodada
  function startRound() {
    if (options.length === 1) {
      // Se só sobrar uma opção, mostra o vencedor final
      showWinner(options[0]);
      return;
    }
  
    // Prepara a rodada atual com as opções disponíveis
    currentRound = [...options];
    winners = [];
    currentIndex = 0;
    showOptions();
  }
  
  // Função para exibir as opções atuais
  function showOptions() {
    if (currentIndex >= currentRound.length) {
      // Quando todas as opções da rodada forem processadas,
      // salva os vencedores e inicia a próxima rodada
      options = [...winners];
      startRound();
      return;
    }
  
    // Mostra as duas opções atuais
    document.getElementById("option1").textContent = currentRound[currentIndex];
    document.getElementById("option2").textContent =
      currentRound[currentIndex + 1];
  
    // Remove event listeners antigos (caso existam)
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    option1.replaceWith(option1.cloneNode(true));
    option2.replaceWith(option2.cloneNode(true));
  
    // Adiciona eventos de clique para selecionar um vencedor
    document
      .getElementById("option1")
      .addEventListener("click", () => pickWinner(currentRound[currentIndex]));
    document
      .getElementById("option2")
      .addEventListener("click", () =>
        pickWinner(currentRound[currentIndex + 1])
      );
  }
  
  // Função para processar a escolha do vencedor
  function pickWinner(winner) {
    // Adiciona o vencedor à lista de vencedores da rodada
    winners.push(winner);
  
    currentIndex += 2; // Avança para o próximo par de opções
    showOptions();
  }
  
  // Função para exibir o vencedor final
  function showWinner(winner) {
    // Esconde a tela de quiz e mostra a tela do vencedor
    document.querySelector(".quiz").classList.add("hidden");
    document.querySelector(".winner").classList.remove("hidden");
    document.querySelector(".result").textContent = winner;
  }
  
  // Função para reiniciar o jogo
  function restartGame() {
    // Restaura as opções iniciais
    options = [
        "Atletismo",
        "Natação",
        "Ginástica Artística",
        "Futebol",
        "Vôlei",
        "Basquete",
        "Handebol",
        "Ciclismo",
        "Boxe",
        "Tênis",
        "Tênis de Mesa",
        "Judô",
        "Taekwondo",
        "Esgrima",
        "Halterofilismo",
        "Polo Aquático",
        "Badminton",
        "Rugby",
        "Skateboarding",
        "Escalada Esportiva",
        "Surfe",
        "Beisebol/Softbol",
        "Hóquei sobre Grama",
        "Golfe",
        "Tiro com Arco",
        "Tiro Esportivo",
        "Canoagem",
        "Remo",
        "Vela",
        "Triatlo",
        "Pentatlo Moderno",
        "karatê",
    ];
  
    // Reseta as telas e mostra a tela inicial
    document.querySelector(".winner").classList.add("hidden");
    document.querySelector(".home").classList.remove("hidden");
  }
  