import fs from 'node:fs';
const file=process.argv[2]||'public/data/metrics.json';
const d=JSON.parse(fs.readFileSync(file,'utf8'));
const issues=[];const check=(c,m)=>{if(!c)issues.push(m)};
check(d.schema_version===1,'schema_version');check(d.validation?.status==='validated','status de validação');check(/^\d{4}-\d{2}-\d{2}$/.test(d.updated_at),'data de atualização');
for(const platform of ['instagram','tiktok']){const p=d[platform];check(p&&p.evidence&&Object.keys(p.evidence).length>0,'fontes '+platform);check(p.period_start<=p.period_end&&p.period_end<=d.updated_at,'período '+platform);for(const[k,v]of Object.entries(p))if(typeof v==='number')check(Number.isFinite(v)&&v>=0,'valor inválido '+platform+'.'+k);}
check(Math.abs(Object.values(d.instagram.age_distribution).reduce((a,b)=>a+b,0)-100)<.2,'total das idades');check(Math.abs(d.instagram.age_25_44_pct-d.instagram.age_25_34_pct-d.instagram.age_35_44_pct)<.01,'soma 25 a 44');
// Deliberately never approves or replaces snapshots. Future ingestion must implement its approved anomaly policy.
if(issues.length){console.error(issues.join('\n'));process.exit(1)}console.log('Métricas: estrutura, períodos, evidências e composição conferidos.');
