---
title: "11. Ataques a redes"
date: 2026-01-04T19:30:46.896Z
---

# 11. Ataques a redes

## 1. Introdução e Contextualização

A Segurança da Informação é uma área de vital importância no cenário atual, onde a dependência de sistemas informatizados e redes de computadores é cada vez maior. Ataques a redes representam uma das principais ameaças à integridade, confidencialidade e disponibilidade das informações. Compreender esses ataques é essencial para profissionais que buscam atuar em cargos de alto nível, como Consultor Legislativo e Auditor Fiscal, onde a proteção de dados sensíveis é primordial.

## 2. Desenvolvimento Teórico Aprofundado

### DoS e DDoS
- **DoS (Denial of Service)**: Ataque que visa tornar um recurso ou serviço indisponível para os usuários. Geralmente, é realizado por uma única máquina.
- **DDoS (Distributed Denial of Service)**: Variação do DoS, mas executado por múltiplas máquinas, frequentemente zumbis em uma botnet, aumentando a magnitude do ataque.

### Botnets
- Redes de computadores infectados (bots) controlados remotamente por um atacante (botmaster). Usados para amplificar ataques DDoS, distribuição de malware, entre outros.

### Phishing
- Técnica de engenharia social que busca enganar o usuário para roubar informações confidenciais (como credenciais de acesso) através de comunicações falsas, geralmente e-mails ou mensagens que parecem ser de fontes confiáveis.

### Zero-day
- Vulnerabilidade desconhecida pelos fabricantes e usuários do software. O termo "zero-day" refere-se ao fato de os desenvolvedores não terem nenhum dia de antecedência para corrigir a falha, tornando-a extremamente perigosa.

### Ping da Morte
- Ataque que envia pacotes malformados e de tamanho superior ao permitido pelo protocolo IP, causando a paralisação ou reinicialização do sistema alvo.

### UDP Flood
- Ataque que envia um grande número de pacotes UDP para portas aleatórias em um servidor remoto, com o objetivo de sobrecarregar a capacidade de resposta do servidor.

### MAC/IP/ARP Spoofing
- Técnicas que envolvem a falsificação de endereços MAC, IP ou ARP para interceptar ou redirecionar o tráfego de rede para o atacante.

### Buffer Overflow
- Ocorre quando um programa tenta escrever mais dados em um buffer do que ele pode armazenar. Isso pode permitir a execução de código malicioso.

### SQL Injection
- Técnica que explora vulnerabilidades em aplicações web, inserindo ou "injetando" SQL malicioso em campos de entrada para ser executado pelo banco de dados.

### XSS (Cross-Site Scripting)
- Ataque que injeta scripts maliciosos em páginas web vistas por outros usuários, explorando vulnerabilidades em aplicações web.

### DNS Poisoning
- Ataque que introduz informações falsas no cache DNS de um servidor, redirecionando o usuário para sites maliciosos sem que ele perceba.

## 3. Visão das Bancas (Análise Estratégica)

As bancas como FGV, Cebraspe e FCC costumam cobrar esses temas com uma abordagem que mescla teoria e aplicação prática. Enquanto a FGV e a FCC podem focar mais em exemplos práticos e estudos de caso, o Cebraspe tende a valorizar a precisão técnica e a fundamentação teórica, exigindo do candidato não apenas o conhecimento dos ataques, mas também das medidas de prevenção e mitigação.

## 4. Tabela de Resumo para Revisão Rápida

| Ataque           | Descrição Breve                                                                                   | Ponto de Atenção                                       |
|------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| DoS/DDoS         | Torna serviço indisponível, DDoS usa botnets.                                                     | Diferença entre DoS e DDoS.                           |
| Phishing         | Engana usuários para roubar informações.                                                          | Engenharia social.                                    |
| Zero-day         | Vulnerabilidade desconhecida pelos desenvolvedores.                                               | Altamente perigosa por falta de correção.             |
| SQL Injection    | Injeta SQL malicioso em aplicações web.                                                           | Explora falhas em aplicações web.                     |
| DNS Poisoning    | Introduz informações falsas no cache DNS.                                                         | Redirecionamento para sites maliciosos.               |

## 5. "O Pulo do Gato": Atenção com Pegadinhas

1. **Certo/Errado**: "Um ataque de Ping da Morte é eficaz contra todos os sistemas operacionais modernos." - **Errado**. Sistemas operacionais modernos são geralmente imunes a esse tipo de ataque devido a melhorias na segurança.
   
2. **Certo/Errado**: "SQL Injection pode ser prevenido simplesmente usando HTTPS." - **Errado**. HTTPS criptografa a transmissão de dados, mas não protege contra a inserção de SQL malicioso em formulários web.

3. **Certo/Errado**: "DDoS é uma variação de DoS que é menos potente, pois é distribuído." - **Errado**. DDoS é geralmente mais potente devido ao uso de múltiplas máquinas.

## 6. Referências Sugeridas

- **ISO/IEC 27001**: Norma internacional para a gestão da segurança da informação.
- **RFC 2827**: Filtragem de tráfego de entrada para mitigar ataques de spoofing.
- **OWASP Top 10**: Lista dos 10 principais riscos de segurança em aplicações web.
- **Manual de Redação da Presidência da República**: Para aprimorar a comunicação escrita em documentos oficiais.

Este material deve ser complementado com a leitura de documentação técnica atualizada e participação em fóruns especializados para manter-se atualizado sobre as últimas tendências e ameaças na área de Segurança da Informação.
