import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=document.querySelector(".search-form"),a=document.querySelector(".gallery");p.addEventListener("submit",m);function m(i){i.preventDefault();const r=i.target.elements.image.value.trim();if(r===""){l.show({title:"Error",message:"Please enter a search term to begin your search.",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"});return}else a.innerHTML='<span class="loader"></span>',u(r).then(o=>{if(o.totalHits>0){const s=o.hits.map(g).join(`

`);a.innerHTML=s,f.refresh()}}).catch(o=>{a.innerHTML="",l.show({title:"Error",message:"There are no images matching your search query. Please try again!",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"})});i.target.reset()}function u(i){const r="https://pixabay.com/api",o=`?key=42174217-6daf07c41ac875e98ae2151fa&q=${i}&image_type=photo$orientation=horizontal&safesearch=true`,s=r+o;return fetch(s).then(e=>e.json())}function g({webformatURL:i,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:n}){return`<li class="gallery-item"><a href="${r}"><img class="gallery-image" src="${i}" alt="${o}" /></a>
<div class="description"> <p>Likes <span>${s}</span></p><p>Views <span>${e}</span></p><p>Comments <span>${t}</span></p><p>Downloads <span>${n}</span></p></div></li>`}const f=new c(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
