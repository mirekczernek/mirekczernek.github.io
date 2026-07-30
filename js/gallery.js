
document.querySelectorAll('.gallery img').forEach(img=>{
 img.addEventListener('click',()=>{
   window.location=img.src;
 });
});
