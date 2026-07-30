
document.addEventListener("DOMContentLoaded",()=>{

  document.querySelectorAll(".gallery img").forEach(img=>{
    img.loading="lazy";
    img.decoding="async";

    if(img.complete){
      img.classList.add("loaded");
    }else{
      img.addEventListener("load",()=>img.classList.add("loaded"));
    }
  });

});
