import GetImages from "./js/AjaxImagenes.js";
import searchImage from "./js/searchImg.js";




const d=document;


d.addEventListener("DOMContentLoaded",e=>{
  GetImages(undefined,undefined)
  searchImage()
});