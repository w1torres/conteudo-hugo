export function buildPrompt(disciplina, topico) {
  return `
    Gere um material de estudo detalhado para concurso público.
    Disciplina: ${disciplina}
    Tópico: ${topico}

    REQUISITOS:
    1. Use Markdown para formatação.
    2. Comece com um CONCEITO robusto e atualizado.
    3. Liste PONTOS-CHAVE para prova (bullet points).
    4. Crie uma seção de "PEGADINHAS DE BANCA" com foco no estilo CEBRASPE.
    5. Mantenha um tom profissional e técnico.
    
    ESTRUTURA DE SAÍDA:
    ### Conceito
    ### Pontos-Chave
    ### Atenção: Pegadinhas de Banca
  `;
}