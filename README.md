# Tainara Demarch — portfólio
Redesign editorial para revisão, com assets do deploy Netlify preservados.

Leia docs/REVISAO.md para métricas, testes, limites, GitHub e publicação.

- app/page.tsx: experiência e curadoria comercial.
- app/globals.css: identidade e responsividade.
- app/silk.tsx: shader progressivo.
- public/data/metrics.json: fonte única de métricas.
- lib/metrics.ts: rejeita dados inválidos antes de renderizar uma atualização.
- scripts/validate-metrics.mjs: validação determinística da base.
- scripts/export-netlify.mjs: exportação estática da mesma interface para netlify-dist.
- scripts/package-review.mjs: cópia navegável com CSS/JS embutidos.
- baseline/: deploy original intacto, também protegido pela tag netlify-current-2026-09-14.

Instalação: usar a versão pnpm declarada em package.json e pnpm install --frozen-lockfile.

Não publicar em produção antes da aprovação do usuário. O Sites gerencia seu próprio repositório; não confundir com o GitHub externo.
