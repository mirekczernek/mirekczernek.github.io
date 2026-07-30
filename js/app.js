
window.addEventListener("DOMContentLoaded",()=>{

 document.querySelectorAll(".nav a").forEach(a=>{
   if(a.pathname===location.pathname){
     a.style.color="#fff";
     a.style.fontWeight="bold";
   }
 });

 const hero=document.getElementById("heroImage");
 if(!hero) return;

 const slides=[
   "img/hero/slide1.jpg",
   "img/hero/slide2.jpg",
   "img/hero/slide3.jpg"
 ];

 let i=0;
 hero.src=slides[0];

 setInterval(()=>{
   hero.style.opacity=0;
   setTimeout(()=>{
      i=(i+1)%slides.length;
      hero.src=slides[i];
      hero.style.opacity=1;
   },400);
 },4000);

});
