import{a as f,S as w,i}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const A="46590037-17c17d616a892c92268aed1a1",y="https://pixabay.com/api/";f.defaults.baseURL=y;const b=async(t,o=1,r=15)=>(await f.get(y,{params:{key:A,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}})).data,F=t=>t.map(({webformatURL:o,largeImageURL:r,tags:a,likes:e,views:s,comments:n,downloads:S})=>`
    <li class="gallery-item">
      <a href="${r}" class="gallery-link">
        <img class="gallery-img" src="${o}" alt="${a}" width="360" height="200"/>
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${n}</p>
        <p><b>Downloads:</b> ${S}</p>
      </div>
    </li>
  `).join("");let h;const L=()=>{h?h.refresh():h=new w(".gallery a",{captionsData:"alt",captionDelay:250})},C={searchForm:document.querySelector(".search-form"),inputForm:document.querySelector(".form-input"),searchBtn:document.querySelector(".form-button"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},{searchForm:E,inputForm:x,searchBtn:P,gallery:l,loaderEl:m,loadMoreBtn:u}=C;let g="",c=1;const p=15;let d=0;E.addEventListener("submit",B);u.addEventListener("click",H);async function B(t){if(t.preventDefault(),g=t.target.elements.search.value.trim(),g===""){l.innerHTML="",t.target.reset(),i.show({message:"Input field cannot be empty",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"});return}l.innerHTML="",c=1,u.classList.add("is-hidden"),m.classList.remove("is-hidden");try{const o=await b(g,c,p);d=o.totalHits;const r=Math.ceil(d/p);if(d===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"});return}l.innerHTML=F(o.hits),L(),t.target.reset(),c<r?u.classList.remove("is-hidden"):i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"info"})}catch(o){console.log(o),i.show({message:"An error occurred while fetching images. Please try again.",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"})}finally{m.classList.add("is-hidden")}}async function H(){c+=1,m.classList.remove("is-hidden");try{const t=await b(g,c,p);l.insertAdjacentHTML("beforeend",F(t.hits)),L(),q(),l.children.length>=d&&(u.classList.add("is-hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"info"}))}catch(t){console.log(t),i.show({message:"An error occurred while fetching images. Please try again.",position:"topRight",timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"})}finally{m.classList.add("is-hidden")}}function q(){const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
