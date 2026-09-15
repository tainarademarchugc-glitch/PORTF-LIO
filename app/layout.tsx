import type {Metadata} from 'next';
import './globals.css';
const title='Tainara Demarch | Criadora de Conteúdo, UGC e Modelo Comercial';
const description='Naturalidade de creator e experiência de modelo comercial. Conheça os trabalhos de Tainara Demarch em beleza, moda, joias, eyewear e lifestyle. Araranguá, SC.';
const origin='https://tainarademarch.netlify.app';
export const metadata:Metadata={title,description,alternates:{canonical:origin+'/'},icons:{icon:'/assets/favicon.svg'},openGraph:{title,description,type:'website',locale:'pt_BR',url:origin+'/',images:[{url:origin+'/assets/images/compartilhamento-tainara.jpg',width:1200,height:630,alt:'Tainara Demarch — Criadora de conteúdo, modelo comercial e UGC'}]},twitter:{card:'summary_large_image',title,description,images:[origin+'/assets/images/compartilhamento-tainara.jpg']}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Tainara Demarch',url:origin,jobTitle:'Criadora de conteúdo e modelo comercial',image:origin+'/assets/images/portrait-hero.webp',sameAs:['https://instagram.com/tainarademarch','https://www.tiktok.com/@tainara.demarch']})}}/></body></html>}
