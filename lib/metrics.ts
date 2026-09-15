import type initial from '@/public/data/metrics.json';
export function validMetrics(value:unknown):value is typeof initial {
 if(!value||typeof value!=='object')return false;
 const d=value as Record<string,any>;
 if(d.schema_version!==1||d.validation?.status!=='validated'||!validDate(d.updated_at))return false;
 for(const [name,keys] of Object.entries({instagram:['followers','views_30d','interactions_30d','women_pct','age_25_44_pct','brazil_pct'],tiktok:['followers','post_views_7d','viewers_7d','net_followers_7d']})){
  const p=d[name];if(!p||!validDate(p.period_start)||!validDate(p.period_end)||p.period_start>p.period_end||p.period_end>d.updated_at)return false;
  if(keys.some(k=>!Number.isFinite(p[k])||p[k]<0))return false;
 }
 if(['women_pct','age_25_44_pct','brazil_pct'].some(k=>d.instagram[k]>100))return false;
 const ages=d.instagram.age_distribution;if(!ages||typeof ages!=='object'||!Object.keys(ages).length||Object.values(ages).some(v=>typeof v!=='number'||!Number.isFinite(v)||v<0||v>100))return false;
 return true;
}
function validDate(s:unknown):s is string {return typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&Number.isFinite(Date.parse(s))&&new Date(s).toISOString().slice(0,10)===s}
