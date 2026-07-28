
const slides=[
'img/hero/slide1.jpg',
'img/hero/slide2.jpg',
'img/hero/slide3.jpg'
];
const hero=document.getElementById('hero');
let i=0;
function show(){
 if(hero) hero.style.backgroundImage=`url(${slides[i]})`;
 i=(i+1)%slides.length;
}
show();
setInterval(show,5000);
