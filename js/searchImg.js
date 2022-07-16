import GetImages from "./AjaxImagenes.js";

export default function searchImage(){
  const d=document;
  const $buscador=d.querySelector(".img-search")
  const $close=d.querySelector(".img-delete")
  const $input=d.querySelector(".img-open")
  const $btnNext=d.querySelector(".footer-btn-next")
  const $btnPrev=d.querySelector(".footer-btn-prev")

  const $arrowLeft=d.querySelector(".arrow-left")
  const $arrowRight=d.querySelector(".arrow-right")

  let page=1;
  d.addEventListener("click",(e)=>{
    let word=$input.value;
    
    if(e.target===$buscador){
      if(word)return GetImages(undefined,word)
    } 
    if(e.target===$close){
      $input.value="";
    } 

    if(e.target === $btnNext || e.target === $arrowRight){
      if(!word){
        page++;
        console.log(page,undefined)
        GetImages(page,undefined)
      }
      if(word){
        page++;
        GetImages(page,word)
      }
    }
    if(e.target === $btnPrev || e.target === $arrowLeft){
      if(page<=1)return;
      if(!word){
        page--;
        console.log(page,undefined)
        GetImages(page,undefined)
      }
      if(word){
        page--;
        GetImages(page,word)
      }
    }
  })
}
