function calcularIMC() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const imc = peso / (altura * altura);

  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso saudável";
  else if (imc < 30) classificacao = "Sobrepeso";
  else classificacao = "Atenção ao controle de hábitos";

  document.getElementById("resultado").innerText = imc.toFixed(2);
  document.getElementById("classificacao").innerText = classificacao;
}

function checkin() {
  let dias = localStorage.getItem("dias") || 0;
  dias++;
  localStorage.setItem("dias", dias);
  document.getElementById("dias").innerText = dias;
}

function gerarFeedback() {
  document.getElementById("textoFeedback").innerHTML = `
  <p><strong>Análise geral:</strong> Você demonstra consistência, o que é um fator essencial para evolução física.</p>
  <p><strong>Pontos fortes:</strong> Boa regularidade e consciência corporal.</p>
  <p><strong>Pontos de melhoria:</strong> Manter atenção ao descanso, hidratação e progressão gradual.</p>
  <p><strong>Recomendação:</strong> Continue focado em hábitos saudáveis e evolução contínua.</p>
  `;
}
