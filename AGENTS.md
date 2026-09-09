# Contexto — teste-1

> `AGENTS.md` específico deste repo — fonte de verdade do projeto, lida por qualquer agente.
> Complementa o contexto global do IA de Elite. Só o que vale em todo turno **neste** projeto.
> Comportamento específico do Claude Code (skills, papel da sessão) vai no `CLAUDE.md` do repo.

## O que é este serviço
Página estática de teste (HTML + CSS), sem backend, build ou framework — usada para experimentar o harness IA de Elite.

## Stack e comandos
- Rodar: abrir `index.html` diretamente no navegador
- Testes: `node --test` (roda os `*.test.js`; testa só funções puras, sem tocar DOM/clipboard/rede)
- Lint: Não se aplica
- Branch base: `main`

## Particularidades / armadilhas
Não se aplica — repositório de teste, sem armadilhas conhecidas ainda.

## Domínios sensíveis
Não se aplica — nenhum dado sensível ou fluxo financeiro neste repositório.

## Agent skills

- **Issues:** markdown local, em `.scratch/<feature>/` (sem GitLab neste repo — remote é GitHub).
- **Rótulos de triagem:** não se aplica — sem GitLab neste repositório.
- **Demandas:** não se aplica — sem GitLab neste repositório.
- **Docs de domínio:** contexto único — `CONTEXT.md` + `docs/adr/` na raiz.
- **MRs como superfície de triagem:** não.
