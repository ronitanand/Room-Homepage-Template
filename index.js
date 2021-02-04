const img=document.querySelector(".img-container img");
const h=document.querySelector(".card1 h1");
const p=document.querySelector(".card1 p");
let slideno=1;
function change(x){
    

    if(slideno==1){
        img.src='./images/desktop-image-hero-3.jpg';
        h.innerHTML='Manufactured with the best materials';
        p.innerHTML=`
        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.
        `
        slideno=3;
    }
    else if(slideno==3){
        img.src='./images/desktop-image-hero-2.jpg';
        h.innerHTML='We are available all across the globe';
        p.innerHTML=`
        With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
        `;
        slideno=2;
    }
else if(slideno==2){
        img.src='./images/desktop-image-hero-1.jpg';
       h.innerHTML='Discover innovative ways to decorate';   
        p.innerHTML=`
        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. 
        Create a room in your own style with our collection and make your property a reflection of you and what you love.`
        slideno=1;
    }
    
}

function change1(){
    if(slideno==1){
        slideno=2;
        img.src='./images/desktop-image-hero-2.jpg';
        h.innerHTML='We are available all across the globe';
        p.innerHTML=`
        With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
        `;}

     else if(slideno==2){
         slideno=3;
         img.src='./images/desktop-image-hero-3.jpg';
        h.innerHTML='Manufactured with the best materials';
        p.innerHTML=`
        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`
     } 
     
     else if(slideno==3){
         slideno=1;
         img.src='./images/desktop-image-hero-1.jpg';
       h.innerHTML='Discover innovative ways to decorate';   
        p.innerHTML=`
        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. 
        Create a room in your own style with our collection and make your property a reflection of you and what you love.`

     }
}
const burger=document.querySelector(".navbar img");
const navi=document.querySelector('.navi');
let cross=0;
burger.addEventListener('click',()=>{
navi.classList.toggle('show');
if(cross==0){
    cross=1;
    burger.src='./images/icon-close.svg';
}
else if(cross==1){
    burger.src='./images/icon-hamburger.svg';
    cross=0;
}
})


//  window.addEventListener('resize',()=>{
//  if(window.innerWidth>600){
//      navi.style.display='none';} 
//     else{
//         navi.style.display='flex';
//         burger.addEventListener('click',()=>{
//             navi.classList.toggle('show'); 
//         })

//     }
//  })

