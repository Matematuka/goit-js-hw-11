import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=document.querySelector(".search-form"),a=document.querySelector(".gallery");p.addEventListener("submit",u);function u(n){n.preventDefault();const r=n.target.elements.image.value.trim();a.innerHTML='<span class="loader"></span>';const o=document.querySelector(".loader");if(r===""){setTimeout(()=>{o.style.display="none"},1e3),l.show({title:"Error",message:"Please enter a search term to begin your search.",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"});return}else m(r).then(s=>{if(s.totalHits>0){const e=s.hits.map(f).join(`

`);a.innerHTML=e,g.refresh(),setTimeout(()=>{o.style.display="none"},1e3)}else a.innerHTML="",l.show({title:"Error",message:"There are no images matching your search query. Please try again!",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"}),setTimeout(()=>{o.style.display="none"},1e3)});n.target.reset()}function m(n){const r="https://pixabay.com/api/",o=`?key=42174217-6daf07c41ac875e98ae2151fa&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`,s=r+o;return fetch(s).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})}function f({webformatURL:n,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:i}){return`<li class="gallery-item"><a href="${r}"><img class="gallery-image" src="${n}" alt="${o}" /></a>
<div class="description"> <p>Likes <span>${s}</span></p><p>Views <span>${e}</span></p><p>Comments <span>${t}</span></p><p>Downloads <span>${i}</span></p></div></li>`}const g=new c(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
