---
title: "5. DevOps, CI/CD e IaC"
date: 2026-01-04T19:32:55.033Z
---

# 5. DevOps, CI/CD e IaC

## 1. Introdução e Contextualização

DevOps, CI/CD (Continuous Integration/Continuous Deployment) e IaC (Infrastructure as Code) são conceitos fundamentais na computação em nuvem e no desenvolvimento de software moderno. Eles representam práticas e metodologias que visam melhorar a eficiência, qualidade e segurança no ciclo de vida do desenvolvimento de software.

## 2. Desenvolvimento Teórico Aprofundado

### DevOps

DevOps é uma cultura que promove a colaboração entre as equipes de desenvolvimento de software e operações de TI, visando a entrega contínua de valor para o usuário final. O objetivo é automatizar e integrar os processos entre essas equipes para construir, testar e liberar software de forma mais rápida e confiável.

### CI/CD

CI/CD é um método de entrega de software que enfatiza a importância da automação no processo de construção, teste e liberação de software. CI (Continuous Integration) refere-se à prática de automatizar a integração de código de diferentes contribuidores em um projeto principal várias vezes ao dia. CD (Continuous Deployment) é a automação da entrega desse código aos ambientes de produção.

### IaC

IaC (Infrastructure as Code) é uma prática de gerenciamento de infraestrutura que usa código para gerenciar e provisionar a infraestrutura, em vez de processos manuais. Isso permite que as equipes de desenvolvimento e operações gerenciem a infraestrutura com a mesma abordagem que usam para o código do aplicativo.

#### Terraform

Terraform é uma ferramenta de IaC que permite definir, em código, a infraestrutura necessária para executar uma aplicação, independentemente do provedor de serviços em nuvem (AWS, Azure, Google Cloud, etc.).

#### Pipelines (Jenkins, GitHub Actions)

Pipelines são conjuntos de passos automatizados que levam o código do desenvolvimento à produção. Jenkins é uma ferramenta open-source para automação de pipelines, enquanto GitHub Actions é um serviço de CI/CD integrado ao GitHub que facilita a automação de pipelines dentro do repositório do GitHub.

#### Observabilidade (CloudWatch, Azure Monitor, GCloud Monitoring)

Observabilidade refere-se à capacidade de monitorar e entender o estado interno de um sistema a partir de seus outputs. CloudWatch (AWS), Azure Monitor e GCloud Monitoring são serviços que oferecem monitoramento e observabilidade para recursos na nuvem, permitindo a coleta de logs, métricas e eventos.

## 3. Visão das Bancas (Análise Estratégica)

As bancas como Cebraspe, FGV e FCC têm abordagens distintas na cobrança desses temas. O Cebraspe tende a valorizar a compreensão conceitual e a aplicação prática dos conceitos, enquanto a FGV e FCC podem focar mais em detalhes teóricos e específicos das ferramentas. É crucial entender a diferença entre a teoria pura e a aplicação prática desses conceitos, pois as bancas podem explorar ambas as abordagens.

## 4. Tabela de Resumo para Revisão Rápida

| Conceito | Descrição |
|----------|-----------|
| DevOps | Cultura de colaboração entre desenvolvimento e operações. |
| CI/CD | Automatização do processo de integração e entrega/deploy. |
| IaC | Uso de código para gerenciar infraestrutura. |
| Terraform | Ferramenta de IaC para provisionamento de infraestrutura. |
| Observabilidade | Monitoramento e entendimento do estado do sistema. |

## 5. "O Pulo do Gato": Atenção com Pegadinhas

1. **Certo/Errado**: "CI/CD elimina a necessidade de testes manuais." - **Errado**. CI/CD automatiza partes do processo de teste, mas testes manuais ainda são necessários para casos que não podem ser automatizados.
2. **Certo/Errado**: "Terraform é específico para a AWS." - **Errado**. Terraform pode ser usado com vários provedores de nuvem, não apenas a AWS.
3. **Certo/Errado**: "GitHub Actions é uma ferramenta exclusiva para CI, não para CD." - **Errado**. GitHub Actions pode ser configurado para ambos, CI e CD.

## 6. Referências Sugeridas

- **Normas ISO/IEC 20000** e **ISO/IEC 27001**: Para compreensão de gestão de serviços de TI e segurança da informação.
- **Documentação oficial do Terraform**: Para aprofundamento em IaC.
- **Documentação oficial das ferramentas de observabilidade** (CloudWatch, Azure Monitor, GCloud Monitoring): Para entender as capacidades e usos dessas ferramentas.
- **ITIL 4 Foundation**: Para compreender as melhores práticas em gerenciamento de serviços de TI, que complementam o entendimento de DevOps.
