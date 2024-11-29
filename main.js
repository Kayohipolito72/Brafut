function expandirConteudo(link) {
    // Localiza o elemento pai da notícia
    const noticia = link.closest('.noticia');  // Usando closest para pegar o pai mais próximo com a classe .noticia
    const conteudoCompleto = noticia.querySelector('.conteudo-completo');
    
    // Verifica o estilo de display usando getComputedStyle para garantir que estamos pegando o valor correto
    const estiloAtual = window.getComputedStyle(conteudoCompleto).display;
    
    // Verifica se o conteúdo está oculto ou visível
    if (estiloAtual === 'none') {
        // Exibe o conteúdo completo
        conteudoCompleto.style.display = 'block';
        // Altera o texto do link para 'Leia menos'
        link.textContent = 'Leia menos';
    } else {
        // Esconde o conteúdo
        conteudoCompleto.style.display = 'none';
        // Altera o texto do link para 'Leia mais'
        link.textContent = 'Leia mais';
    }
}
