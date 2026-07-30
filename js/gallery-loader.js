document.addEventListener("DOMContentLoaded",()=>{
 const box=document.querySelector(".gallery");
 if(!box || typeof galerie==="undefined") return;

 const folder=box.dataset.folder;

 galerie.forEach(name=>{
   const img=document.createElement("img");
   img.src=`img/${folder}/${name}`;
   img.alt=name;
   box.appendChild(img);
 });
});
