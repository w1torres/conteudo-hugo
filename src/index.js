import fs from 'fs-extra';
import path from 'path';
import { prepareDirectories } from './generator/createStructure.js';
import { generateAIContent } from './ai/client.js';
import { buildPrompt } from './generator/promptBuilder.js';

async function main() {
  console.log("🚀 Iniciando geração do material de estudo...");

  // Carrega apenas o edital
  const edital = await fs.readJson('./edital/edital.json');

  await prepareDirectories(edital);

  for (const disc of edital.disciplinas) {
    for (const topico of disc.topicos) {
      // Formata o nome do arquivo: remove espaços e caracteres especiais
      const safeFileName = topico
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-");

      const fileName = `${safeFileName}.md`;
      const filePath = path.join(process.cwd(), 'content', disc.slug, fileName);

      if (await fs.pathExists(filePath)) {
        console.log(`⏩ Pulando: ${topico} (já existe)`);
        continue;
      }

      console.log(`📝 Gerando conteúdo para: ${topico}...`);
      
      // Chama o buildPrompt apenas com disciplina e tópico
      const prompt = buildPrompt(disc.nome, topico);
      const content = await generateAIContent(prompt);

      const frontmatter = `---
title: "${topico}"
date: ${new Date().toISOString()}
draft: false
---

{{< toc >}}

${content}
`;

      await fs.writeFile(filePath, frontmatter);
    }
  }
  console.log("✅ Processo concluído!");
}

main().catch(err => {
  console.error("❌ Erro fatal na execução:", err);
  process.exit(1);
});