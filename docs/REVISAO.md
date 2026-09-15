# Tainara Demarch — redesign para revisão

## Estado e limites
Nova versão implementada e compilada. Nenhuma publicação no Netlify foi executada, e nenhum domínio, DNS, deploy ou integração comercial foi alterado. O ZIP recebido permanece como referência de produção; não foi feita verificação autenticada da produção externa.

O projeto Sites foi registrado para salvar a versão, sem autorizar publicação automática. A skill Sites informa que todo endereço implantado é uma publicação, inclusive privado. Por isso o link hospedado depende da autorização para publicar uma cópia privada; a revisão navegável é entregue em ZIP para abrir localmente.

GitHub não estava conectado na sessão. Não foi possível pesquisar repositórios privados, comparar seu conteúdo ou criar repositório. Não se presume que um repositório não exista. Instalar/conectar GitHub permite localizar o correspondente antes de enviar alterações.

## Site anterior
HTML único com CSS/JS embutidos; sem fonte central de métricas. Instagram e TikTok continham números antigos, incluindo 555 seguidores no TikTok. Havia textos internos de curadoria, excesso de repetição visual, tipografia pequena e visualizador sem tratamento completo de foco. Os arquivos válidos foram preservados integralmente.

## Nova versão
Direção editorial com fundo perolado, tipografia serifada, vinho profundo, retrato protagonista, layouts abertos e bordas discretas. Trabalhos em vídeo sob demanda, apresentação de 24 segundos, galeria ampliável, menu móvel, serviços expansíveis e CTA de WhatsApp. Vuk Jeans e Charlott aparecem somente como trabalhos anteriores de modelo comercial; Visual Ótica Joalheria aparece como produção recorrente de conteúdo.

WebGL: camada GLSL de luz/seda, sem amostrar ou distorcer o rosto. Grain discreto, reação horizontal ao cursor, 30 fps no desktop e 15 fps no mobile, resolução limitada, pausa ao sair do viewport ou ocultar a aba. Prefers-reduced-motion, economia de dados, memória limitada e falta de WebGL usam a fotografia estática. Transições fotográficas usam escala suave em CSS; displacement entre fotografias não foi implementado para evitar custo adicional e alteração do rosto.

## Métricas
Fonte única: public/data/metrics.json. Leitura das 15 capturas fornecidas; captura IMG_7113 pertence a outro recorte e não foi misturada ao conjunto com período confirmado. O ano 2026 vem do briefing, pois as capturas exibem dia e mês.

| Canal | Indicador | Resultado | Período/fonte |
|---|---|---:|---|
| Instagram | Seguidores | 6.188 | IMG_7124; captura fornecida em 14/09/2026 |
| Instagram | Visualizações | aproximadamente 132,3 mil | 15/08 a 13/09/2026; IMG_7120 |
| Instagram | Interações | 3.855 | mesmo período; IMG_7121 |
| Instagram | Visualizadores | 16.799 | mesmo período; IMG_7121 |
| Instagram | Mulheres | 65,8% | IMG_7125 |
| Instagram | 25–44 anos | 69,8% | 35,6% + 34,2%; IMG_7125 |
| Instagram | Brasil | 96,1% | IMG_7126 |
| TikTok | Seguidores | 1.320 | IMG_7117 |
| TikTok | Visualizações | aproximadamente 13,9 mil | 06/09 a 12/09/2026; IMG_7114 |
| TikTok | Espectadores | aproximadamente 7,1 mil | mesmo período; IMG_7116 |
| TikTok | Seguidores líquidos | aproximadamente +1,1 mil | mesmo período; IMG_7117 |

Detalhes e rastreabilidade por campo estão no JSON. O mídia kit e a imagem de compartilhamento originais foram preservados; podem conter informações antigas. O link do PDF identifica sua edição original e direciona às métricas do site.

## Validação
- Build Sites/Vinext e exportação estática Netlify executados com sucesso.
- Desktop no Chrome remoto; layouts móveis simulados em iframes de 390 e 320 pixels, com largura útil de 375 e 305 pixels devido à barra de rolagem do ambiente. Sem overflow horizontal após ajuste.
- Menu móvel, âncoras, abertura/fechamento de vídeos, expansão de trabalhos, galeria, Escape e devolução de foco conferidos.
- Apresentação de 24 segundos e vídeo de haircare de 30 segundos com readyState 4. Conteúdo da Visual também verificado na exportação.
- Oito vídeos decodificados integralmente por ffmpeg sem erros. Vídeos preservados em 720×1280; não foi inventada resolução superior.
- 46 assets preservados com hashes iguais ao deploy. Inventário/curadoria em media-audit.json.
- Caminhos locais da exportação sem arquivos faltantes; imagens visíveis carregadas; um H1, title, descrição, canonical, favicon e metadados sociais presentes.
- JSON conferido por código; distribuição etária soma 100%; 25–44 anos reconciliado.
- Links de WhatsApp, e-mail, Instagram e TikTok conferidos contra o briefing, sem enviar mensagens. Disponibilidade/login nas plataformas externas não foi testada.
- Sem erro funcional de aplicação observado no pacote final. O navegador de testes injeta atributos que provocam advertência de hidratação na versão de desenvolvimento; erros de extensão foram separados dos erros do site.
- Reduced motion, falta de WebGL e pausa de animações conferidos por leitura do código, sem emulação de hardware ou Safari/iPhone físico. Não foi executado Lighthouse; não há pontuação de performance ou nota estética objetiva garantida.

## Performance
Fotografias WebP existentes; hero prioritário; demais imagens lazy. Nenhum vídeo é carregado na abertura: o elemento video só é montado no visualizador. JavaScript da exportação é cerca de 290 KB antes de compressão. O pacote de mídia preservado tem cerca de 40 MB, mas não é transferido integralmente na primeira visualização. Sem fontes remotas, bibliotecas de WebGL ou carrosséis pesados adicionais.

## Versionamento e operação
Baseline: tag netlify-current-2026-09-14. Branch local: redesign-astra-shaders. O commit de baseline contém o deploy exato em baseline/. O repositório gerenciado do Sites é independente do GitHub do usuário e da produção Netlify.

Comandos de projeto:
- node scripts/validate-metrics.mjs
- node scripts/export-netlify.mjs
- node scripts/package-review.mjs

A versão de revisão usa o mesmo componente React, CSS e JSON da aplicação. Extraia o ZIP e abra ABRIR-PORTFOLIO.html mantendo assets ao lado. A cópia foi testada no navegador por HTTP; abertura file:// foi preparada com JavaScript/CSS embutidos e caminhos relativos, mas não testada no computador do usuário.

## Automação futura
Não há tarefa diária, API, token, integração Metricool ou workflow de commit ativo. A futura ingestão deve validar fonte, data, período e campos; comparar snapshot anterior e candidato; registrar valor anterior, novo e variação percentual; bloquear anomalias; só então atualizar metrics.json e reconstruir o site. Limites de variação precisam ser definidos e aprovados conforme cada métrica, não presumidos nesta entrega.

## Próximo passo
Revisar a cópia navegável; conectar GitHub para localizar e comparar o repositório existente; autorizar uma cópia privada no Sites caso queira link hospedado. Após aprovação visual e verificação final, conectar a branch escolhida ao Netlify mantendo a possibilidade de rollback pela baseline. Não enviar o pacote ao Netlify de produção antes da aprovação.
