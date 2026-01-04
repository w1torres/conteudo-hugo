---
title: "9. Criptografia"
date: 2026-01-04T19:29:51.059Z
---

# 9. Criptografia

## 1. Introdução e Contextualização

A criptografia é uma área da ciência da computação e da matemática que se ocupa da proteção de dados, tornando-os inacessíveis a usuários não autorizados. Sua importância tem crescido exponencialmente com o aumento da digitalização de informações, sendo essencial em diversas áreas, especialmente na segurança da informação. No contexto de concursos, o tema é recorrente e abordado com profundidade, exigindo dos candidatos não apenas o conhecimento teórico, mas também a capacidade de aplicá-lo em situações práticas.

## 2. Desenvolvimento Teórico Aprofundado

### Fundamentos e Arquitetura

A criptografia pode ser dividida em dois grandes ramos: simétrica e assimétrica. A criptografia simétrica utiliza a mesma chave para cifrar e decifrar a mensagem, enquanto a criptografia assimétrica usa um par de chaves, uma pública e uma privada.

#### Assinatura Digital

A assinatura digital é um mecanismo de criptografia assimétrica que permite verificar a autenticidade e a integridade de uma mensagem ou documento digital. Ela é gerada a partir do uso de uma chave privada do remetente e pode ser verificada por qualquer pessoa que tenha acesso à chave pública correspondente.

#### Proteção de Dados em Trânsito e Repouso

- **Dados em Trânsito**: Refere-se à proteção de dados enquanto eles são transferidos de um sistema a outro. O uso de protocolos seguros como TLS (Transport Layer Security) e SSL (Secure Sockets Layer) é fundamental.
  
- **Dados em Repouso**: Refere-se à proteção de dados armazenados em um dispositivo ou rede. A criptografia de disco completo (FDE) e a criptografia de arquivos específicos são técnicas comuns.

### Diagrama de Fluxo da Assinatura Digital

```
Usuário A quer enviar uma mensagem segura para o Usuário B:

1. Usuário A cria uma mensagem.
2. Usuário A gera um resumo da mensagem usando uma função hash.
3. Usuário A cifra o resumo com sua chave privada, criando a assinatura digital.
4. Usuário A envia a mensagem e a assinatura digital para o Usuário B.
5. Usuário B recebe a mensagem e a assinatura digital.
6. Usuário B decifra a assinatura digital usando a chave pública do Usuário A, obtendo o resumo da mensagem.
7. Usuário B gera um novo resumo da mensagem recebida usando a mesma função hash.
8. Usuário B compara os dois resumos. Se forem iguais, a mensagem é autêntica e não foi alterada.
```

## 3. Visão das Bancas (Análise Estratégica)

As principais bancas como FGV, Cebraspe e FCC têm abordagens distintas para o tema de criptografia. Enquanto a FGV tende a enfatizar a aplicação prática e os casos de uso, o Cebraspe foca na compreensão teórica profunda e na capacidade de análise crítica do candidato. A FCC, por sua vez, pode mesclar ambos os enfoques, com uma leve inclinação para o contexto legislativo e normativo.

### Diferenças entre "Teoria de Livro" e "Cobrança de Prova"

- **Teoria de Livro**: Geralmente abrange os conceitos de criptografia de forma ampla, incluindo história, teoria matemática subjacente e aplicações.
  
- **Cobrança de Prova**: Foca em aplicações específicas, normativas relevantes (como a LGPD no Brasil), e cenários práticos, exigindo do candidato não apenas o conhecimento teórico, mas também a habilidade de aplicá-lo.

## 4. Tabela de Resumo para Revisão Rápida

| Conceito            | Descrição                                                                 |
|---------------------|---------------------------------------------------------------------------|
| Criptografia Simétrica | Usa a mesma chave para cifrar e decifrar dados.                           |
| Criptografia Assimétrica | Usa um par de chaves (pública e privada) para cifrar e decifrar dados.    |
| Assinatura Digital  | Permite verificar a autenticidade e integridade de uma mensagem ou documento. |
| Dados em Trânsito   | Proteção de dados durante a transferência entre sistemas.                 |
| Dados em Repouso    | Proteção de dados armazenados em um dispositivo ou rede.                  |

## 5. "O Pulo do Gato": Atenção com Pegadinhas

1. **Certo/Errado**: "A criptografia assimétrica é menos segura que a criptografia simétrica." - **Errado**. A segurança não depende do tipo, mas do uso correto e da implementação das chaves.
   
2. **Certo/Errado**: "A assinatura digital pode ser gerada usando a chave pública." - **Errado**. A assinatura digital é gerada com a chave privada do remetente.
   
3. **Certo/Errado**: "Os dados em trânsito são mais vulneráveis que os dados em repouso." - **Depende**. A vulnerabilidade depende das medidas de segurança implementadas em cada caso.

## 6. Referências Sugeridas

- **ISO/IEC 27001**: Norma internacional para a gestão da segurança da informação.
- **NIST SP 800-57**: Recomendações para o gerenciamento de chaves criptográficas.
- **RFC 5280**: Padrões para a infraestrutura de chave pública (PKI) para certificados digitais.
- **Lei Geral de Proteção de Dados (LGPD)**: Legislação brasileira sobre a proteção de dados pessoais.
- **COBIT e ITIL**: Frameworks para a governança e gestão de TI, incluindo práticas de segurança da informação.
