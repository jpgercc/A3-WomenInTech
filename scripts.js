function scrollDown() {
    // Altura desejada a rolar em porcentagem da altura total da página
    const scrollAmountInPercent = 40; // Agora estamos rolando 70% para baixo
    
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
  