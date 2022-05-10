console.clear();
const prompt = require("prompt-sync")();

//////////////////////////// FUNÇÕES GERAIS DO JOGO ///////////////////////////
// 1-FUNÇÃO QUE CHAMA A TECLA ENTER PARA CONTINUAR
function enter() {
  console.log();
  pressione = prompt("> PRESSIONE ENTER...");
  while (pressione !== "") {
    pressione = prompt(`> PRESSIONE ENTER...`);
  }
  console.clear();
}

// 2-FUNÇÃO DE CONTROLA PASSAGEM DOS PERÍODOS: MANHÃ, TARDE E NOITE.
let tempo = {
  periodo: "Período: MANHÃ",
  passaPeriodo: function () {
    if (this.periodo == "Período: MANHÃ") {
      this.periodo = "Período: TARDE";
    } else if (this.periodo == "Período: TARDE") {
      this.periodo = "Período: NOITE";
    } else if (this.periodo == "Período: NOITE") {
      this.periodo = "Período: MANHÃ";
    }
  },
};

// 3-FUNÇÃO QUE PERGUNTA SE QUER JOGAR NOVAMENTE
function sair() {
  verifica = prompt("Deseja jogar novamente? [S/N] ").toLowerCase();
  while (verifica !== "s" && verifica !== "n") {
    console.log("Resposta inválida!");
    verifica = prompt("Deseja jogar novamente? [S/N] ").toLowerCase();
  }
  console.clear();
}

// ******************************** INTRODUÇÃO DO JOGO ********************************
console.log(`         
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                              * * *  MARATONA FIRE  * * *
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    O torneio "MARATONA FIRE" será daqui a 02 (dois) dias. É um torneio onde os atletas
    correm uma distância de 10km em um dos desertos mais quentes do mundo: o "SAARA".

    E o nosso atleta favorito, chamado BOBY, se candidatou para esse torneio,
    mas, devido aos poucos cuidados com a sua dieta nos últimos meses, ele acabou ficando
    acima do peso, pesando atualmente 57kg.
    
                              QUAL A SUA MISSÃO NESSE JOGO?
    Voce deve ajudar nosso atleta a voltar ao peso ideal que é entre 50 e 55 quilos,
    e garantir que ele tenha um bom rendimento para a prova.

    Para isso, voce deve fazer escolhas viáveis para o dia-a-dia de nosso atleta, que
    vão impactar positivamente em seu rendimento na maratona.
                                   
                                    ALGUNS CUIDADOS!!!
    AGORA, voce precisa tomar bastante cuidado com as suas escolhas, para que não
    venha afetar na ENERGIA (disposição) de nosso atleta que está 100% normal,
    pois um maratonista precisa de pelo menos 80% dela para correr sem problemas.

    VOCE tem 02 dias para ajudá-lo nesse propósito até a maratona começar, caso
    contrário, nosso maratonista poderá não obter uma boa performance para a disputa!
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    `);
// *******************************************************************************

console.log(`> PRESSIONE ENTER PARA COMEÇAR O JOGO...`);
prompt();
console.clear();

// ********************************** INICIO DO CICLO **********************************
do {
  // STATUS (ATRIBUTOS) PRINCIPAIS DO ATLETA PARA A MODALIDADE.
  const atleta = {
    nome: "Boby",
    peso: 57,
    energia: 100,
  };

  // *********************************** (DIA 01) ***********************************
  console.log("DIA 01");

  // FUNÇÃO QUE CONTROLA PASSAGEM DO TEMPO => "MANHÃ"
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(tempo.periodo);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log();

  // ************************ PERGUNTA 01 - MANHÃ (DIA 1) ************************
  console.log(
    `> ${atleta.nome} acaba de acordar, o que voce sugere que ele faça: `
  );
  console.log();

  // Lista com as opções da pergunta 01.
  const lista1ManhaDia1 = [
    "Tomar Café e ler um livro",
    "Tomar café e correr 15 minutos para aquecer",
  ];
  const lista1 = `[ 1 ] ${lista1ManhaDia1[0]} \n[ 2 ] ${lista1ManhaDia1[1]}`;
  console.log(lista1);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta1 = prompt(`RESPONDA 1 ou 2 -> `);
  while (resposta1 !== "1" && resposta1 !== "2" && resposta1 !== "3") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta1 = prompt(`RESPONDA 1 ou 2 -> `);
  }
  if (resposta1 == 1) {
    atleta.peso = atleta.peso + 1;
    atleta.energia = atleta.energia + 5;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista1ManhaDia1[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta1 == 2) {
    atleta.peso = atleta.peso - 1;
    atleta.energia = atleta.energia - 5;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista1ManhaDia1[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // ************************ PERGUNTA 02 - MANHÃ (DIA 1) ************************
  console.log(
    `> ${atleta.nome} precisa treinar um pouco, o que voce sugere para ele? `
  );
  console.log();

  // Lista com as opções da pergunta 02.
  const lista2ManhaDia1 = ["Treinar na Academia", "Correr um pouco no deserto"];
  const lista2 = `[ 1 ] ${lista2ManhaDia1[0]} \n[ 2 ] ${lista2ManhaDia1[1]}`;
  console.log(lista2);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta2 = prompt("RESPONDA 1 ou 2 -> ");
  console.log();
  while (resposta2 !== "1" && resposta2 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta2 = prompt("RESPONDA 1 ou 2 -> ");
  }
  if (resposta2 == 1) {
    atleta.peso = atleta.peso - 1;
    atleta.energia = atleta.energia - 5;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista2ManhaDia1[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta2 == 2) {
    atleta.peso = atleta.peso - 2;
    atleta.energia = atleta.energia - 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista2ManhaDia1[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // ************************ PERGUNTA 03 - MANHÃ (DIA 1) ************************
  console.log(
    `> Chegou a hora de almocar, qual prato voce vai pedir para o ${atleta.nome}? `
  );
  console.log();

  // Lista com as opções da pergunta 03.
  const lista3ManhaDia1 = [
    "Massa, cereais, saladas e frutas",
    "Saladas e frutas",
  ];
  const lista3 = `[ 1 ] ${lista3ManhaDia1[0]} \n[ 2 ] ${lista3ManhaDia1[1]}`;
  console.log(lista3);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta3 = prompt(`RESPONDA 1 ou 2 -> `);
  console.log();
  while (resposta3 !== "1" && resposta3 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta3 = prompt("RESPONDA 1 ou 2 -> ");
  }
  if (resposta3 == 1) {
    atleta.peso = atleta.peso + 2;
    atleta.energia = atleta.energia + 15;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista3ManhaDia1[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta3 == 2) {
    atleta.peso = atleta.peso + 0;
    atleta.energia = atleta.energia + 0;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista3ManhaDia1[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // FUNÇÃO QUE CONTROLA PASSAGEM DO TEMPO => "TARDE"
  tempo.passaPeriodo();
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(tempo.periodo);
  console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        `);

  // ************************ PERGUNTA 04 - TARDE (DIA 1) ************************
  console.log(`> ${atleta.nome} quer uma sugestão para essa tarde:`);
  console.log();

  // Lista com as opções da pergunta 04.
  const lista4TardeDia1 = ["Descansar um pouco", "Treinar na academia"];
  const lista4 = `[ 1 ] ${lista4TardeDia1[0]} \n[ 2 ] ${lista4TardeDia1[1]}`;
  console.log(lista4);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta4 = prompt("RESPONDA 1 ou 2 -> ");
  console.log();
  while (resposta4 !== "1" && resposta4 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta4 = prompt("RESPONDA 1 ou 2 -> ");
  }
  if (resposta4 == 1) {
    atleta.peso = atleta.peso + 1;
    atleta.energia = atleta.energia + 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista4TardeDia1[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta4 == 2) {
    atleta.peso = atleta.peso - 1;
    atleta.energia = atleta.energia - 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista4TardeDia1[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // FUNÇÃO QUE CONTROLA PASSAGEM DO TEMPO => "NOITE"
  tempo.passaPeriodo();
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(tempo.periodo);
  console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        `);

  // ************************ PERGUNTA 05 - NOITE (DIA 1) ************************
  console.log(
    `> A noite chegou, nosso atleta está finalizando o dia, o que voce indica:`
  );
  console.log();

  // Lista com as opções da pergunta 05.
  const lista5NoiteDia1 = [
    "Jantar e dormir",
    "Passear um pouco e depois dormir",
  ];
  const lista5 = `[ 1 ] ${lista5NoiteDia1[0]} \n[ 2 ] ${lista5NoiteDia1[1]}`;
  console.log(lista5);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta5 = prompt("RESPONDA 1 ou 2 -> ");
  console.log();
  while (resposta5 !== "1" && resposta5 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta5 = prompt("RESPONDA 1 ou 2 > ");
  }
  if (resposta5 == 1) {
    atleta.peso = atleta.peso + 1;
    atleta.energia = atleta.energia + 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista5NoiteDia1[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta5 == 2) {
    atleta.peso = atleta.peso + 0;
    atleta.energia = atleta.energia + 5;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista5NoiteDia1[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // Fim do dia 01 com resultado "PARCIAL" do status do atleta.
  console.log(`FIM DO DIA 01`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(`Resultado parcial:`);
  console.log("Peso: ", atleta.peso, "kg");
  console.log("Energia: ", atleta.energia, "%");
  console.log();
  if (atleta.peso < 50 || atleta.peso > 55) {
    console.log(`O PESO de ${atleta.nome} está ruim!`);
  } else {
    console.log(`O PESO de ${atleta.nome} está ideal para competir!`);
  }
  if (atleta.energia < 80) {
    console.log(`A ENERGIA de ${atleta.nome} está ruim!`);
  } else {
    console.log(`A ENERGIA de ${atleta.nome} está ideal para competir!`);
  }
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );

  enter();

  // *********************************** (DIA 02) ***********************************
  console.log("DIA 02");

  // FUNÇÃO QUE CONTROLA PASSAGEM DO TEMPO => "MANHÃ"
  tempo.passaPeriodo();
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(tempo.periodo);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log();

  // ************************ PERGUNTA 01 - MANHÃ (DIA 2) ************************
  console.log(
    `> Estamos no segundo dia, nosso maratonista acaba de acordar, o que voce vai pedir?`
  );
  console.log();

  // Lista com as opções da pergunta 06.
  const lista1ManhaDia2 = [
    "Um café leve dessa vez",
    "Um café bastante reforçado",
  ];
  const lista1Dia2 = `[ 1 ] ${lista1ManhaDia2[0]} \n[ 2 ] ${lista1ManhaDia2[1]}`;
  console.log(lista1Dia2);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta6 = prompt(`RESPONDA 1 ou 2 -> `);
  while (resposta6 !== "1" && resposta6 !== "2" && resposta6 !== "3") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta6 = prompt(`RESPONDA 1 ou 2 -> `);
  }
  if (resposta6 == 1) {
    atleta.peso = atleta.peso + 1;
    atleta.energia = atleta.energia + 5;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista1ManhaDia2[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta6 == 2) {
    atleta.peso = atleta.peso + 2;
    atleta.energia = atleta.energia + 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista1ManhaDia2[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // ************************ PERGUNTA 02 - MANHÃ (DIA 2) ************************
  console.log(
    `> ${atleta.nome} precisa treinar pelo menos 1 hora hoje, o que voce sugere? (lembrando que nadar proporciona mais queima de calorias).`
  );
  console.log();

  // Lista com as opções da pergunta 07.
  const lista2ManhaDia2 = ["Treinar na Academia", "Nadar na piscina"];
  const lista2Dia2 = `[ 1 ] ${lista2ManhaDia2[0]} \n[ 2 ] ${lista2ManhaDia2[1]}`;
  console.log(lista2Dia2);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta7 = prompt("RESPONDA 1 ou 2 -> ");
  console.log();
  while (resposta7 !== "1" && resposta7 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta7 = prompt("RESPONDA 1 ou 2 -> ");
  }
  if (resposta7 == 1) {
    atleta.peso = atleta.peso - 1;
    atleta.energia = atleta.energia - 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista2ManhaDia2[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta7 == 2) {
    atleta.peso = atleta.peso - 2;
    atleta.energia = atleta.energia - 20;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista2ManhaDia2[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // ************************ PERGUNTA 03 - MANHÃ (DIA 2) ************************
  console.log(
    `> Esse almoço é importante para nosso atleta, qual prato voce sugere? `
  );
  console.log();

  // Lista com as opções da pergunta 08.
  const lista3ManhaDia2 = ["Shake para atletas", "Feijoada, saladas e frutas"];
  const lista3Dia2 = `[ 1 ] ${lista3ManhaDia2[0]} \n[ 2 ] ${lista3ManhaDia2[1]}`;
  console.log(lista3Dia2);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta8 = prompt(`RESPONDA 1 ou 2 -> `);
  console.log();
  while (resposta8 !== "1" && resposta8 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta8 = prompt("RESPONDA 1 ou 2 -> ");
  }
  if (resposta8 == 1) {
    atleta.peso = atleta.peso + 1;
    atleta.energia = atleta.energia + 20;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista3ManhaDia2[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta8 == 2) {
    atleta.peso = atleta.peso + 2;
    atleta.energia = atleta.energia - 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista3ManhaDia2[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // FUNÇÃO QUE CONTROLA PASSAGEM DO TEMPO => "TARDE"
  tempo.passaPeriodo();
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(tempo.periodo);
  console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        `);

  // ************************ PERGUNTA 04 - TARDE (DIA 2) ************************
  console.log(
    `> ${atleta.nome} quer uma sugestão importante para essa tarde antes do dia do torneio:`
  );
  console.log();

  // Lista com as opções da pergunta 09.
  const lista4TardeDia2 = ["Dormir", "Treinar na academia"];
  const lista4Dia2 = `[ 1 ] ${lista4TardeDia2[0]} \n[ 2 ] ${lista4TardeDia2[1]}`;
  console.log(lista4Dia2);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta9 = prompt("RESPONDA 1 ou 2 -> ");
  console.log();
  while (resposta9 !== "1" && resposta9 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta9 = prompt("RESPONDA 1 ou 2 -> ");
  }
  if (resposta9 == 1) {
    atleta.peso = atleta.peso + 1;
    atleta.energia = atleta.energia + 15;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista4TardeDia2[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta9 == 2) {
    atleta.peso = atleta.peso - 2;
    atleta.energia = atleta.energia - 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista4TardeDia2[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();

  // FUNÇÃO QUE CONTROLA PASSAGEM DO TEMPO => "NOITE"
  tempo.passaPeriodo();
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(tempo.periodo);
  console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        `);

  // ************************ PERGUNTA 05 - NOITE (DIA 2) ************************
  console.log(
    `> É a última noite de preparação de ${atleta.nome}, o que voce indica para ele:`
  );
  console.log();

  // Lista com as opções da pergunta 10.
  const lista5NoiteDia2 = [
    "Jantar (frutas e salada) e depois Dormir",
    "Treinar, Jantar (frutas/saladas), Dormir",
  ];
  const lista5Dia2 = `[ 1 ] ${lista5NoiteDia2[0]} \n[ 2 ] ${lista5NoiteDia2[1]}`;
  console.log(lista5Dia2);
  console.log();

  // Condicionais para as respostas do usuario do jogo.
  let resposta10 = prompt("RESPONDA 1 ou 2 -> ");
  console.log();
  while (resposta10 !== "1" && resposta10 !== "2") {
    console.log("Reposta inválida, escolha uma das opções: 1 ou 2.");
    resposta10 = prompt("RESPONDA 1 ou 2 > ");
  }
  if (resposta10 == 1) {
    atleta.peso = atleta.peso + 0;
    atleta.energia = atleta.energia + 10;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista5NoiteDia2[0], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  } else if (resposta10 == 2) {
    atleta.peso = atleta.peso - 1;
    atleta.energia = atleta.energia + 5;
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
    console.log(`Resultado do atleta depois de`, lista5NoiteDia2[1], ":");
    console.log("Peso: ", atleta.peso, "kg");
    console.log("Energia: ", atleta.energia, "%");
    console.log(
      `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
    );
  }
  enter();
  // Fim do dia 02 com resultado "FINAL" do status do atleta.
  console.log(`FIM DO DIA 02`);
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log(`Resultado FINAL DA PERFORMANCE DO ATLETA:`);
  console.log("Peso: ", atleta.peso, "kg");
  console.log("Energia: ", atleta.energia, "%");
  console.log();

  if (atleta.peso < 50 || atleta.peso > 55) {
    console.log(`O PESO de ${atleta.nome} está ruim!`);
  } else {
    console.log(`O PESO de ${atleta.nome} está ideal para competir!`);
  }
  if (atleta.energia < 80) {
    console.log(`A ENERGIA de ${atleta.nome} está ruim!`);
  } else {
    console.log(`A ENERGIA de ${atleta.nome} está ideal para competir!`);
  }
  console.log();
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  if (atleta.peso > 55 || atleta.peso < 50 || atleta.energia < 80) {
    console.log(
      "QUE PENA :( !!!\nO ATLETA NÃO ATINGIU TODOS OS CRITÉRIOS, ELE NÃO TEM CONDIÇÕES/CHANCE DE VENCER A MARATONA!"
    );
  } else if (atleta.peso >= 50 || atleta.peso <= 55 || atleta.energia >= 80) {
    console.log(
      `PARABÉNS!!! VOCE ATINGIU O OBJETIVO PRINCIPAL! ${atleta.nome} ESTÁ APTO A PARTICIPAR DA MARATONA!`
    );
  }
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );

  // FUNÇÃO QUE CONTROLA PASSAGEM DO TEMPO
  tempo.passaPeriodo();

  // FUNÇÃO "sair()" PARA A OPÇÃO WHILE QUE TERMINA O CICLO E SUGERE AO USUARIO SE QUER JOGAR NOVAMENTE
  console.log();
  sair();

  console.log();
} while (verifica == "s");
{
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log("FIM DO JOGO!");
  console.log(
    `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`
  );
  console.log();
}
