---
title: "5. Segurança de Infraestrutura"
date: 2026-01-04T19:18:34.493Z
---

# 5. Segurança de Infraestrutura

## 1. Introdução e Contextualização

A segurança de infraestrutura de TI é um conjunto de práticas, ferramentas e políticas destinadas a proteger os recursos de tecnologia da informação e os dados contra acessos não autorizados, ataques, ou qualquer forma de mal uso que possa comprometer a integridade, confidencialidade e disponibilidade dos mesmos. No cenário de concursos públicos, especialmente para cargos de alto nível como Consultor Legislativo e Auditor Fiscal, o entendimento profundo sobre segurança da infraestrutura de TI é crucial, dada a crescente dependência de sistemas informatizados e a necessidade de garantir a proteção de informações sensíveis e críticas.

## 2. Desenvolvimento Teórico Aprofundado

### Hardening
O processo de hardening refere-se ao conjunto de técnicas e procedimentos utilizados para reduzir vulnerabilidades em sistemas operacionais, aplicativos e infraestruturas de rede. Envolve a aplicação de patches, desativação de serviços desnecessários, configuração de políticas de segurança, entre outras medidas. Normas como a ISO/IEC 27002 fornecem diretrizes para a implementação de controles de segurança, incluindo práticas de hardening.

### Firewalls (NGFW)
Os firewalls de próxima geração (NGFW - Next-Generation Firewalls) vão além das capacidades tradicionais de filtragem de pacotes, incorporando funcionalidades como inspeção profunda de pacotes (DPI), prevenção contra intrusões (IPS), e capacidade de identificar e bloquear tráfego de aplicações específicas. Eles são essenciais na defesa em camadas, protegendo o perímetro da rede.

### IDS/IPS
Sistemas de Detecção de Intrusão (IDS) e Sistemas de Prevenção de Intrusão (IPS) são fundamentais para identificar e, no caso do IPS, bloquear atividades maliciosas na rede. Enquanto o IDS alerta sobre possíveis intrusões, o IPS atua ativamente para prevenir a consumação do ataque.

### Proxies e NAC (Network Access Control)
Proxies atuam como intermediários entre usuários e a internet, podendo oferecer funcionalidades como filtragem de conteúdo e cache de páginas. O NAC é utilizado para controlar o acesso à rede, baseando-se em políticas de segurança que determinam quais dispositivos estão autorizados a se conectar.

### VPNs, SSL/TLS, PKI
VPNs permitem a criação de conexões seguras e criptografadas sobre uma rede menos segura, como a internet. O SSL/TLS é um protocolo de segurança que fornece comunicações seguras na Internet para serviços como email, navegação web e mensagens instantâneas. A Infraestrutura de Chave Pública (PKI) suporta a emissão de certificados digitais para autenticação.

### Segmentação de Rede
A segmentação de rede é uma prática de segurança que divide a rede em sub-redes menores, podendo limitar o tráfego a áreas específicas e reduzir o risco de ataques laterais dentro da rede.

## 3. Visão das Bancas (Análise Estratégica)

As bancas como Cebraspe, FGV e FCC têm abordagens distintas na cobrança de temas de segurança de infraestrutura. Enquanto o Cebraspe tende a valorizar a compreensão conceitual e a aplicação prática dos conhecimentos, a FGV pode focar em aspectos mais teóricos e legislativos. A FCC, por sua vez, pode explorar cenários práticos e estudos de caso. É importante notar que, embora a teoria seja fundamental, as bancas valorizam a capacidade do candidato de aplicar o conhecimento em situações práticas.

## 4. Tabela de Resumo para Revisão Rápida

| Conceito          | Descrição                                                                                   |
|-------------------|---------------------------------------------------------------------------------------------|
| Hardening         | Técnicas para reduzir vulnerabilidades em sistemas e redes.                                 |
| NGFW              | Firewalls de próxima geração com inspeção profunda de pacotes e prevenção contra intrusões. |
| IDS/IPS           | Sistemas para detecção e prevenção de atividades maliciosas na rede.                        |
| VPNs, SSL/TLS, PKI| Tecnologias para comunicações seguras e autenticação.                                       |
| Segmentação de Rede | Divisão da rede em sub-redes para limitar o tráfego e aumentar a segurança.                |

## 5. "O Pulo do Gato": Atenção com Pegadinhas

1. **Certo/Errado**: "O hardening é um processo único e não precisa ser atualizado." - **Errado**. O hardening é um processo contínuo, que deve ser atualizado conforme novas vulnerabilidades são descobertas.
2. **Certo/Errado**: "NGFW e IDS/IPS são funcionalmente idênticos." - **Errado**. Apesar de ambos contribuírem para a segurança da rede, NGFWs são focados na filtragem de tráfego enquanto IDS/IPS na detecção e prevenção de intrusões.
3. **Certo/Errado**: "VPNs não necessitam de SSL/TLS para serem seguras." - **Errado**. VPNs frequentemente utilizam SSL/TLS para garantir a segurança e a privacidade das comunicações.

## 6. Referências Sugeridas

- **ISO/IEC 27002**: Fornece diretrizes para práticas de segurança da informação.
- **RFC 5246 (TLS 1.2)** e **RFC 8446 (TLS 1.3)**: Descrevem o protocolo TLS, utilizado para segurança em comunicações na internet.
- **ITIL e COBIT**: Frameworks que incluem práticas recomendadas para a gestão de serviços de TI e governança, respectivamente, com seções dedicadas à segurança da informação.
