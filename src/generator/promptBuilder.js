// promptBuilder.js
export function buildPrompt(disciplina, topico, detalhes) {
  return `
    Você é um professor especialista em concursos de alto nível (Consultor Legislativo e Auditor Fiscal).
    Gere um material de estudo exaustivo e didático para o cargo de Nível Superior.

    DISCIPLINA: ${disciplina}
    TÓPICO: ${topico}
    DETALHES ESPECÍFICOS: ${detalhes}

    DIRETRIZES DE CONTEÚDO:
    1. LINGUAGEM: Técnica, porém clara. Use termos de mercado e referências oficiais (ISO, ABNT, RFCs, ITIL, COBIT, Legislação vigente, etc., conforme o tema).
    2. PROFUNDIDADE: Não fique no básico. Explore nuances, exceções e divergências doutrinárias ou entre bancas (Ex: "Para a FGV o entendimento é X, para o Cebraspe é Y").
    3. FORMATAÇÃO: Use Markdown rigoroso. Tabelas para comparações e blocos de código se houver sintaxe.

    ESTRUTURA DO DOCUMENTO:
    
    # ${topico}

    ## 1. Introdução e Contextualização
    - Definição formal e importância do tema no cenário atual de concursos.

    ## 2. Desenvolvimento Teórico Aprofundado
    - Explique os fundamentos e a arquitetura.
    - Foque nos detalhes: "${detalhes}".
    - Inclua diagramas em formato de texto ou tabelas comparativas se ajudar na compreensão.

    ## 3. Visão das Bancas (Análise Estratégica)
    - Como esse tema costuma ser cobrado pelas principais bancas (FGV, Cebraspe, FCC).
    - Diferencie o que é "teoria de livro" do que é "cobrança de prova".

    ## 4. Tabela de Resumo para Revisão Rápida
    - Crie uma tabela com os 5 pontos mais importantes para memorização.

    ## 5. "O Pulo do Gato": Atenção com Pegadinhas
    - Liste 3 a 5 afirmações "Certo/Errado" que costumam induzir o candidato ao erro, explicando o motivo do erro.

    ## 6. Referências Sugeridas
    - Cite quais manuais ou normas o aluno deve ler para complementar (ex: Manual de Redação da Presidência, Normas ISO 27001, etc).

    ---
    Gere o conteúdo em Markdown, iniciando diretamente no título.
  `;
}