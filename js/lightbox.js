
document.addEventListener('DOMContentLoaded',()=>{
 const lb=document.createElement('div');
 lb.id='lightbox';
 lb.innerHTML='<span class="close">&times;</span><img id="lbImg">';
 document.body.appendChild(lb);

 const img=lb.querySelector('#lbImg');
 const close=()=>lb.classList.remove('open');

 document.querySelectorAll('.gallery img').forEach(i=>{
   i.addEventListener('click',e=>{
      e.preventDefault();
      img.src=i.src;
      lb.classList.add('open');
   });
 });

 lb.addEventListener('click',e=>{
   if(e.target===lb||e.target.classList.contains('close')) close();
 });

 document.addEventListener('keydown',e=>{
   if(e.key==='Escape') close();
 });
});
