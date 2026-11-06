const botoesHabilidades = document.querySelectorAll(".card-habilidades");

botoesHabilidades.forEach((botao) => {
  botao.addEventListener("click", function () {
    botao.classList.toggle("ativo");
  });
});
