import{a as f,S as w,i as a}from"./assets/vendor-C4-ZuMk8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const A="46590037-17c17d616a892c92268aed1a1",y="https://pixabay.com/api/";f.defaults.baseURL=y;const F=async(t,s=1,r=15)=>(await f.get(y,{params:{key:A,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:r}})).data,L=t=>t.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:o,comments:n,downloads:S})=>`
    <li class="gallery-item">
      <a href="${r}" class="gallery-link">
        <img class="gallery-img" src="${s}" alt="${i}" width="360" height="200"/>
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e}</p>
        <p><b>Views:</b> ${o}</p>
        <p><b>Comments:</b> ${n}</p>
        <p><b>Downloads:</b> ${S}</p>
      </div>
    </li>
  `).join("");let h;const b=()=>{h?h.refresh():h=new w(".gallery a",{captionsData:"alt",captionDelay:250})},C={searchForm:document.querySelector(".search-form"),inputForm:document.querySelector(".form-input"),searchBtn:document.querySelector(".form-button"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},{searchForm:E,inputForm:x,searchBtn:P,gallery:l,loaderEl:d,loadMoreBtn:u}=C;let g="",c=1;const p=15;let m=0;E.addEventListener("submit",B);u.addEventListener("click",H);async function B(t){if(t.preventDefault(),g=t.target.elements.search.value.trim(),g===""){l.innerHTML="",t.target.reset(),a.show({message:"Input field cannot be empty",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"});return}l.innerHTML="",c=1,u.classList.add("is-hidden"),d.classList.remove("is-hidden");try{const s=await F(g,c,p);m=s.totalHits;const r=Math.ceil(m/p);if(m===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"});return}l.innerHTML=L(s.hits),b(),t.target.reset(),c<r?u.classList.remove("is-hidden"):a.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"info"})}catch(s){console.log(s),a.show({message:"An error occurred while fetching images. Please try again.",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"})}finally{d.classList.add("is-hidden")}}async function H(){c+=1,d.classList.remove("is-hidden");try{const t=await F(g,c,p),s=document.createDocumentFragment();t.hits.forEach(r=>{const i=document.createElement("div");i.classList.add("gallery-item"),i.innerHTML=L([r]),s.appendChild(i)}),l.appendChild(s),b(),v(),l.children.length>=m&&(u.classList.add("is-hidden"),a.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"info"}))}catch(t){console.log(t),a.show({message:"An error occurred while fetching images. Please try again.",position:"topRight",timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",class:"error"})}finally{d.classList.add("is-hidden")}}function v(){const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
