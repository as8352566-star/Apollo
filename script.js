function calcularIMC() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const imc = peso / (altura * altura);

  let msg = "";

  if (imc < 18.5) msg = "Abaixo do peso – foque em nutrição equilibrada.";
  else if (imc < 25) msg = "Peso saudável 👍";
  else msg = "Acima do peso – hábitos saudáveis ajudam muito.";

  document.getElementById("resultado").innerText =
    `IMC: ${imc.toFixed(2)} | ${msg}`;
}

function criarConta() {
  localStorage.setItem("streak", 1);
  document.getElementById("streak").innerText =
    "🔥 Streak iniciado! Continue cuidando da sua saúde.";
}

function gerarFeedback() {
  const feedbacks = [
    "Você demonstra consistência, isso é um ponto forte.",
    "Manter rotina e descanso é essencial.",
    "Pequenas melhorias diárias geram grandes resultados.",
    "Hidratação e sono fazem muita diferença."
  ];

  const aleatorio = Math.floor(Math.random() * feedbacks.length);
  document.getElementById("feedback").innerText = feedbacks[aleatorio];
}
