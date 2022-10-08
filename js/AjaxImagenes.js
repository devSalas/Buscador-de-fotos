/* import GetImages from "./AjaxImagenes" */
const d=document;
const $gridItems=d.querySelectorAll(".grid-items");

const $input=d.querySelector(".img-open")
 

export default async function GetImages(i=1,word){
  $gridItems[0].innerHTML="";
  $gridItems[1].innerHTML="";
  $gridItems[2].innerHTML="";
  let res;
  
  if(word){
    
    res=await fetch(`https://api.unsplash.com/search/photos/?page=${i}&query=${word}&client_id=rwDdmvw6XL5_uTQKYB0aaAiy2VH4pcTbQi-romOTsZM&per_page=40`,{
    "Accept-Version":"v1"
    }) 
    const data= await res.json()
    console.log(data)
    let n =0;
    data.results.forEach(e=>{
      n++;
      if(n===3) n=0;
      plantillaImg(e,n)
    })  
    return;
  }
  if(!word){
    res=await fetch(`https://api.unsplash.com/photos/?page=${i}&client_id=rwDdmvw6XL5_uTQKYB0aaAiy2VH4pcTbQi-romOTsZM&es&per_page=40`,{
    "Accept-Version":"v1"})
    const data= await res.json()
    let n =0;
    data.forEach(e=>{
      n++;
      if(n===3){
        n=0;
      }
      plantillaImg(e,n)
    })
  }


  function plantillaImg(e,n){ 
    const $fragments={
      0:"",
      1:"",
      2:""
    }
    $fragments[n] = document.createDocumentFragment();
    const $template = document.querySelector('template').content;
    $template.querySelector("img").src=`${e.urls.regular}`
    $template.querySelector("img").loading=`lazy`
    const clone=$template.cloneNode(true);
    $fragments[n].appendChild(clone);
    $gridItems[n].appendChild($fragments[n]);
  }
}

