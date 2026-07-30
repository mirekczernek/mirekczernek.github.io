let gallery=[],idx=0;
function setGallery(a){gallery=a;}
function openLB(i){idx=i;render();}
function render(){
let lb=document.getElementById('lightbox');
if(!lb){
lb=document.createElement('div');
lb.id='lightbox';
lb.innerHTML='<div id="prev" class="lb-btn">&#10094;</div><img><div id="next" class="lb-btn">&#10095;</div>';
document.body.appendChild(lb);
lb.onclick=e=>{if(e.target===lb)lb.remove();};
document.getElementById('prev').onclick=e=>{e.stopPropagation();show(idx-1);};
document.getElementById('next').onclick=e=>{e.stopPropagation();show(idx+1);};
}
show(idx);
}
function show(i){
if(i<0)i=gallery.length-1;
if(i>=gallery.length)i=0;
idx=i;
document.querySelector('#lightbox img').src=gallery[idx].src;
}
document.addEventListener('keydown',e=>{
const lb=document.getElementById('lightbox');
if(!lb)return;
if(e.key==='Escape')lb.remove();
if(e.key==='ArrowRight')show(idx+1);
if(e.key==='ArrowLeft')show(idx-1);
});
