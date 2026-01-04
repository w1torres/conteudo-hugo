---
title: "2. Design e Programação"
date: 2026-01-04T19:23:03.399Z
---

# 2. Design e Programação

## 1. Introdução e Contextualização

Design e Programação são fundamentais na engenharia de software, abrangendo desde a concepção de sistemas até sua implementação. Esses conceitos são vitais para o desenvolvimento de software eficiente, manutenível e de alta qualidade. No cenário de concursos públicos, especialmente para cargos de alto nível como Consultor Legislativo e Auditor Fiscal, o entendimento profundo desses temas é crucial, pois são frequentemente abordados em provas, especialmente por bancas como o Cebraspe.

## 2. Desenvolvimento Teórico Aprofundado

### Padrões de Design (GoF, GRASP)

- **GoF (Gang of Four)**: Refere-se aos 23 padrões de design de software documentados por Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides. Esses padrões são divididos em três categorias: Criacionais, Estruturais e Comportamentais. Exemplos incluem Singleton (Criacional), Adapter (Estrutural) e Observer (Comportamental).

- **GRASP (General Responsibility Assignment Software Patterns)**: São nove padrões utilizados para atribuir responsabilidades a classes e objetos em design orientado a objetos. Exemplos incluem Expert, Creator, Controller, etc.

### Concorrência, Paralelismo, Multithreading, Assíncrona

- **Concorrência**: Refere-se à capacidade de um sistema gerenciar múltiplas operações ou tarefas ao mesmo tempo, não necessariamente executando-as simultaneamente, mas podendo intercalar sua execução.

- **Paralelismo**: Diz respeito à execução simultânea de múltiplas tarefas. Requer hardware com múltiplos núcleos de processamento para ser efetivo.

- **Multithreading**: Técnica que permite a um programa operar usando múltiplos threads de execução, possibilitando a concorrência dentro do mesmo processo.

- **Programação Assíncrona**: Permite que tarefas sejam executadas de forma independente da sequência principal do programa, melhorando a eficiência ao lidar com operações de I/O ou longas esperas por recursos.

## 3. Visão das Bancas (Análise Estratégica)

- **Cebraspe**: Tende a focar em questões que exigem compreensão conceitual profunda, frequentemente utilizando cenários práticos para avaliar o entendimento dos candidatos sobre padrões de design e conceitos de concorrência. Raramente entra em detalhes de sintaxe específica de linguagem de programação.

- **FGV e FCC**: Essas bancas podem abordar o tema de maneira mais teórica, com perguntas diretas sobre definições e características dos padrões GoF e GRASP, além de questões sobre diferenças entre concorrência e paralelismo.

## 4. Tabela de Resumo para Revisão Rápida

| Conceito          | Descrição                                                                 |
|-------------------|---------------------------------------------------------------------------|
| Padrões GoF       | 23 padrões divididos em Criacionais, Estruturais e Comportamentais.       |
| Padrões GRASP     | 9 padrões para atribuição de responsabilidades em OOP.                    |
| Concorrência      | Capacidade de gerenciar múltiplas operações ou tarefas ao mesmo tempo.    |
| Paralelismo       | Execução simultânea de múltiplas tarefas.                                 |
| Multithreading    | Uso de múltiplos threads de execução dentro do mesmo processo.            |

## 5. "O Pulo do Gato": Atenção com Pegadinhas

1. **Certo/Errado**: "O padrão Singleton pode ser considerado tanto um padrão Criacional quanto um padrão Estrutural." - **Errado**. Singleton é estritamente um padrão Criacional.
   
2. **Certo/Errado**: "Multithreading e programação assíncrona são conceitos equivalentes." - **Errado**. Apesar de ambos lidarem com a execução de múltiplas tarefas, são conceitos distintos com aplicações diferentes.

3. **Certo/Errado**: "Todos os padrões GRASP são aplicáveis a qualquer paradigma de programação." - **Errado**. GRASP é especificamente voltado para programação orientada a objetos.

## 6. Referências Sugeridas

- **Design Patterns: Elements of Reusable Object-Oriented Software** por Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides.
- **Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and Iterative Development** por Craig Larman, que oferece uma excelente introdução aos padrões GRASP.
- **Java Concurrency in Practice** por Brian Goetz, para uma compreensão profunda de concorrência e multithreading em Java.
- **Normas ISO/IEC relevantes para Engenharia de Software**, como a ISO/IEC 12207 (para processos de ciclo de vida de software) e ISO/IEC 25010 (para qualidade de produto de software).
