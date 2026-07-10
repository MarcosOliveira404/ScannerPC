# Quick System Diagnostic

Sistema de diagnóstico de hardware desenvolvido em Node.js utilizando a biblioteca `systeminformation`. A aplicação coleta e exibe informações detalhadas sobre o computador diretamente no terminal, oferecendo dois modos de execução: um diagnóstico rápido com os dados essenciais e um diagnóstico avançado com informações completas de hardware, sistema operacional e desempenho.

## Funcionalidades

* Diagnóstico rápido e avançado do sistema.
* Informações do sistema operacional e do computador.
* Monitoramento de CPU, uso por núcleo e temperatura.
* Informações detalhadas da memória RAM e módulos instalados.
* Capacidade, utilização e informações dos discos.
* Estatísticas de leitura e escrita (I/O) dos discos.
* Detecção de GPU e memória de vídeo (VRAM).
* Informações das interfaces de rede e tráfego.
* Status da bateria (quando disponível).
* Informações da placa-mãe e BIOS.
* Listagem de dispositivos USB conectados.
* Quantidade de processos em execução.
* Tempo de atividade (uptime) do sistema.

## Tecnologias utilizadas

* Node.js
* JavaScript
* systeminformation

## Objetivo

Fornecer uma ferramenta leve, rápida e prática para técnicos de informática, estudantes e profissionais de TI realizarem diagnósticos completos do computador sem a necessidade de softwares gráficos.

## Como executar

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install
```

3. Execute o diagnóstico desejado:

```bash
node QuickSystem.js
```

ou

```bash
node Sisten.js
```

Também é possível iniciar pelos arquivos `.bat` incluídos no projeto para facilitar a execução no Windows.

## Licença

Este projeto é distribuído sob a licença MIT.
