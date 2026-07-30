
document.addEventListener('DOMContentLoaded',()=>{
 const images=[...document.querySelectorAll('.gallery img')];
 const lb=document.getElementById('lightbox');
 if(!lb||images.length===0) return;

 const img=lb.querySelector('#lbImg');
 let current=0;

 const prev=document.createElement('div');
 prev.id='lbPrev';
 prev.className='lb-arrow';
 prev.innerHTML='&#10094;';

 const next=document.createElement('div');
 next.id='lbNext';
 next.className='lb-arrow';
 next.innerHTML='&#10095;';

 const counter=document.createElement('div');
 counter.className='lb-counter';

 lb.append(prev,next,counter);

 function show(i){
   if(i<0)i=images.length-1;
   if(i>=images.length)i=0;
   current=i;
   img.src=images[current].src;
   counter.textContent=(current+1)+' / '+images.length;
 }

 images.forEach((el,i)=>{
   el.addEventListener('click',()=>show(i));
 });

 prev.onclick=e=>{e.stopPropagation();show(current-1);}
 next.onclick=e=>{e.stopPropagation();show(current+1);}

 document.addEventListener('keydown',e=>{
   if(!lb.classList.contains('open')) return;
   if(e.key==='ArrowLeft') show(current-1);
   if(e.key==='ArrowRight') show(current+1);
 });
});
