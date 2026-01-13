let dias = 1;

function calcularIMC() {
  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);

  if (!peso || !altura) return;

  const imc = peso / (altura * altura);
  let texto = "";

  if (imc < 18.5) texto = "Abaixo do peso — foco em nutrição equilibrada.";
  else if (imc < 25) texto = "Peso saudável — continue com bons hábitos 👍";
  else if (imc < 30) texto = "Sobrepeso — pequenos ajustes já ajudam.";
  else texto = "IMC elevado — acompanhamento saudável é importante.";

  document.getElementById("imcValor").innerText = imc.toFixed(1);
  document.getElementById("imcTexto").innerText = texto;
}

function checkin() {
  dias++;
  document.getElementById("dias").innerText = dias;
  document.getElementById("totalDias").innerText = dias;
}

function gerarFeedback() {
  document.getElementById("textoFeedback").innerHTML = `
  <h3>1. Análise Geral</h3>
  <p>Com base nos dados informados, você demonstra preocupação com sua saúde e constância, o que é um ponto muito positivo.</p>

  <h3>2. Pontos Fortes</h3>
  <ul>
    <li>Boa consistência no acompanhamento</li>
    <li>Rotina organizada</li>
    <li>Consciência corporal</li>
  </ul>

  <h3>3. Pontos de Melhoria</h3>
  <ul>
    <li>Manter regularidade de sono</li>
    <li>Equilibrar alimentação ao longo do dia</li>
    <li>Evitar longos períodos sem atividade</li>
  </ul>

  <h3>4. Recomendações</h3>
  <p>Continue focando em progresso gradual. Pequenas melhorias diárias trazem grandes resultados ao longo do tempo.</p>
  `;
}
