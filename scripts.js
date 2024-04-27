function scrollDown() {
  // Altura desejada a rolar em porcentagem da altura total da página
  const scrollAmountInPercent = 25; // Agora estamos rolando X% para baixo
  
  // Obtém a altura total da página
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // Calcula a nova posição da rolagem em pixels
  const targetPositionInPx = (scrollAmountInPercent / 100) * pageHeight;
  
  // Rola a página para a nova posição com animação suave (smooth scrolling)
  window.scrollTo({
    top: targetPositionInPx,
    behavior: "smooth"
  });
}

function myFunction() {
  var x = document.getElementById("myPara");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

