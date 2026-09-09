# Tarefa: botao-copiar-link

**Responsável:** rafarpg
**Tipo:** feat
**Entrega:** mr-por-tarefa (tarefa isolada, sem demanda)
**Status:** concluída
**Branch:** feat/botao-copiar-link

## Descrição
Adicionar um botão que copia a URL da página para a área de transferência, com feedback visual de sucesso/erro.

## Critérios de aceite
- Botão visível na página
- Ao clicar, copia a URL atual para o clipboard
- Dá feedback visual (texto/título) de sucesso ou falha
- Feedback desaparece sozinho depois de alguns segundos

## Arquivos impactados
- `index.html` — adicionar o botão
- `style.css` — estilo do botão
- novo `copy-link.js` — lógica de cópia + mensagem de feedback (testável isoladamente)
- novo `copy-link.test.js` — teste unitário da função de mensagem

## Bloqueios
Nenhum.
