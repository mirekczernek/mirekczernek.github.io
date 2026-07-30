async function initGallery(){
const cat=new URLSearchParams(location.search).get('category')||'people';
const data=await fetch('data/'+cat+'.json').then(r=>r.json());
setGallery(data);
const g=document.getElementById('gallery');
g.className='gallery-grid';
g.innerHTML='';
data.forEach((p,i)=>{
const d=document.createElement('div');
d.className='gallery-item';
d.innerHTML=`<img loading="lazy" src="${p.src}" alt="${p.title}">`;
d.onclick=()=>openLB(i);
g.appendChild(d);
});
}
initGallery();
