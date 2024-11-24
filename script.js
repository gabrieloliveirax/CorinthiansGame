// EventListener para acontecer algo quando o botão foi clicado
document.getElementById("submit-btn").addEventListener("click", function () {
  // Variáveis
  let score = 0; // Inicializa a pontuação do usuário
  const totalPossibleScore = 10; // Define o total de pontos possíveis
  const resultSection = document.getElementById("result"); // Seção onde o resultado será mostrado
  let allAnswered = true; // Variável para verificar se todas as perguntas foram respondidas

  resultSection.classList.add("d-none"); // Esconde a seção de resultados inicialmente

  // 1. Validação da Pergunta Aberta (Q1)
  const q1Answer = document.getElementById("q1").value.trim(); // Resposta da primeira pergunta
  const q1Feedback = document.getElementById("q1-feedback"); // Feedback da primeira pergunta
  if (q1Answer) { // Verifica se o usuário respondeu a pergunta
    if (q1Answer === "1910") { // Se a resposta estiver correta
      score += 1.5; // Adiciona 1.5 pontos à pontuação
      q1Feedback.innerHTML = '<span class="text-success">Correto!</span>'; // Mostra mensagem de sucesso
    } else { // Se a resposta estiver incorreta
      q1Feedback.innerHTML =
        '<span class="text-danger">Resposta incorreta. A resposta correta é 1910.</span>'; // Mostra mensagem de erro
    }
  } else { // Se a pergunta não for respondida
    q1Feedback.innerHTML =
      '<span class="text-warning">Por favor, responda esta pergunta.</span>'; // Solicita que o usuário responda
    allAnswered = false; // Marca que nem todas as perguntas foram respondidas
  }

  // 2. Validação da Pergunta de Múltipla Escolha (Q2)
  const q2Answer = document.querySelector('input[name="q2"]:checked'); // Resposta da pergunta de múltipla escolha (Q2)
  const q2Feedback = document.getElementById("q2-feedback"); // Feedback da segunda pergunta
  if (q2Answer) { // Verifica se uma resposta foi selecionada
    if (q2Answer.value === "Palmeiras") { // Se a resposta estiver correta
      score += 1.5; // Adiciona 1.5 pontos à pontuação
      q2Feedback.innerHTML = '<span class="text-success">Correto!</span>'; // Mostra mensagem de sucesso
    } else { // Se a resposta estiver incorreta
      q2Feedback.innerHTML =
        '<span class="text-danger">Resposta incorreta. A resposta correta é Palmeiras.</span>'; // Mostra mensagem de erro
    }
  } else { // Se a pergunta não for respondida
    q2Feedback.innerHTML =
      '<span class="text-warning">Por favor, selecione uma resposta.</span>'; // Solicita que o usuário selecione uma resposta
    allAnswered = false; // Marca que nem todas as perguntas foram respondidas
  }

  // 3. Validação da Pergunta de Múltipla Escolha (Q3)
  const q3Answer = document.querySelector('input[name="q3"]:checked'); // Resposta da pergunta de múltipla escolha (Q3)
  const q3Feedback = document.getElementById("q3-feedback"); // Feedback da terceira pergunta
  if (q3Answer) { // Verifica se uma resposta foi selecionada
    if (q3Answer.value === "2") { // Se a resposta estiver correta
      score += 1.5; // Adiciona 1.5 pontos à pontuação
      q3Feedback.innerHTML = '<span class="text-success">Correto!</span>'; // Mostra mensagem de sucesso
    } else { // Se a resposta estiver incorreta
      q3Feedback.innerHTML =
        '<span class="text-danger">Resposta incorreta. A resposta correta é 2.</span>'; // Mostra mensagem de erro
    }
  } else { // Se a pergunta não for respondida
    q3Feedback.innerHTML =
      '<span class="text-warning">Por favor, selecione uma resposta.</span>'; // Solicita que o usuário selecione uma resposta
    allAnswered = false; // Marca que nem todas as perguntas foram respondidas
  }

  // 4. Validação da Pergunta de Múltipla Escolha (Q4)
  const q4Answer = document.querySelector('input[name="q4"]:checked'); // Resposta da pergunta de múltipla escolha (Q4)
  const q4Feedback = document.getElementById("q4-feedback"); // Feedback da quarta pergunta
  if (q4Answer) { // Verifica se uma resposta foi selecionada
    if (q4Answer.value === "Cláudio") { // Se a resposta estiver correta
      score += 1.5; // Adiciona 1.5 pontos à pontuação
      q4Feedback.innerHTML = '<span class="text-success">Correto!</span>'; // Mostra mensagem de sucesso
    } else { // Se a resposta estiver incorreta
      q4Feedback.innerHTML =
        '<span class="text-danger">Resposta incorreta. A resposta correta é Cláudio.</span>'; // Mostra mensagem de erro
    }
  } else { // Se a pergunta não for respondida
    q4Feedback.innerHTML =
      '<span class="text-warning">Por favor, selecione uma resposta.</span>'; // Solicita que o usuário selecione uma resposta
    allAnswered = false; // Marca que nem todas as perguntas foram respondidas
  }

  // 5. Validação da Pergunta de Checkbox (Q5)
  const q5Answers = document.querySelectorAll('input[name="q5"]:checked'); // Respostas da pergunta de checkbox (Q5)
  const q5Correct = ["Libertadores", "Brasileirão"]; // Respostas corretas
  const q5Feedback = document.getElementById("q5-feedback"); // Feedback da quinta pergunta
  let q5Score = 0; // Inicializa a pontuação da pergunta de checkbox
  if (q5Answers.length > 0) { // Verifica se o usuário selecionou ao menos uma resposta
    q5Answers.forEach((input) => { // Para cada resposta selecionada
      if (q5Correct.includes(input.value)) { // Se a resposta estiver correta
        q5Score += 1; // Adiciona 1 ponto para resposta correta
      } else { // Se a resposta estiver incorreta
        q5Score -= 1; // Subtrai 1 ponto para resposta incorreta
      }
    });
    score += q5Score; // Atualiza a pontuação total
    if (q5Score === 2) { // Se o usuário acertou ambas as respostas
      q5Feedback.innerHTML = '<span class="text-success">Correto!</span>'; // Mostra mensagem de sucesso
    } else if (q5Score >= 0) { // Se o usuário acertou pelo menos uma resposta
      q5Feedback.innerHTML = `<span class="text-danger">Você marcou ${q5Score} de 2 pontos. As respostas corretas são Libertadores e Brasileirão.</span>`; // Mensagem de parcial
    } else { // Se o usuário errou ambas as respostas
      q5Feedback.innerHTML = `<span class="text-danger">Você marcou ${q5Score} pontos negativo. As respostas corretas são Libertadores e Brasileirão.</span>`; // Mensagem de erro
    }
  } else { // Se o usuário não selecionou nenhuma resposta
    q5Feedback.innerHTML =
      '<span class="text-warning">Por favor, selecione ao menos uma resposta.</span>'; // Solicita que o usuário selecione ao menos uma resposta
    allAnswered = false; // Marca que nem todas as perguntas foram respondidas
  }

  // 6. Validação da Pergunta de Checkbox (Q6)
  const q6Answers = document.querySelectorAll('input[name="q6"]:checked'); // Respostas da pergunta de checkbox (Q6)
  const q6Correct = ["Preto", "Branco"]; // Respostas corretas
  const q6Feedback = document.getElementById("q6-feedback"); // Feedback da sexta pergunta
  let q6Score = 0; // Inicializa a pontuação da pergunta de checkbox
  if (q6Answers.length > 0) { // Verifica se o usuário selecionou ao menos uma resposta
    q6Answers.forEach((input) => { // Para cada resposta selecionada
      if (q6Correct.includes(input.value)) { // Se a resposta estiver correta
        q6Score += 1; // Adiciona 1 ponto para resposta correta
      } else { // Se a resposta estiver incorreta
        q6Score -= 1; // Subtrai 1 ponto para resposta incorreta
      }
    });
    score += q6Score; // Atualiza a pontuação total
    if (q6Score === 2) { // Se o usuário acertou ambas as respostas
      q6Feedback.innerHTML = '<span class="text-success">Correto!</span>'; // Mostra mensagem de sucesso
    } else if (q6Score >= 0) { // Se o usuário acertou pelo menos uma resposta
      q6Feedback.innerHTML = `<span class="text-danger">Você marcou ${q6Score} de 2 pontos. As respostas corretas são Preto e Branco.</span>`; // Mensagem de parcial
    } else { // Se o usuário errou ambas as respostas
      q6Feedback.innerHTML = `<span class="text-danger">Você marcou ${q6Score} pontos negativo. As respostas corretas são Preto e Branco.</span>`; // Mensagem de erro
    }
  } else { // Se o usuário não selecionou nenhuma resposta
    q6Feedback.innerHTML =
      '<span class="text-warning">Por favor, selecione ao menos uma resposta.</span>'; // Solicita que o usuário selecione ao menos uma resposta
    allAnswered = false; // Marca que nem todas as perguntas foram respondidas
  }

  // Exibição do Resultado Final
  if (allAnswered) { // Se todas as perguntas foram respondidas
    document.getElementById(
      "score"
    ).innerHTML = `Você acertou <strong>${score}</strong> de <strong>${totalPossibleScore}</strong> pontos!`; // Exibe o total de pontos
    resultSection.classList.remove("d-none"); // Mostra a seção de resultados
  } else { // Se alguma pergunta não foi respondida
    resultSection.classList.add("d-none"); // Esconde a seção de resultados
  }
});

// Função para reiniciar o quiz
document.getElementById("restart-btn").addEventListener("click", function () {
  // Limpa todas as respostas e feedbacks
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="radio"], input[type="checkbox"]'
  );
  inputs.forEach((input) => {
    if (input.type === "text") {
      input.value = ""; // Limpa os campos de texto
    } else {
      input.checked = false; // Desmarca as opções de múltipla escolha e checkbox
    }
  });
  document
    .querySelectorAll('[id$="-feedback"]')
    .forEach((feedback) => (feedback.innerHTML = "")); // Limpa os feedbacks das perguntas

  // Esconde o resultado e limpa a pontuação
  document.getElementById("result").classList.add("d-none"); // Esconde a seção de resultados
  document.getElementById("score").innerHTML = ""; // Limpa a pontuação exibida
});