import{i as l,S as p}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector(".search-form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",m);function m(o){o.preventDefault(),a.innerHTML='<span class="loader"></span>';const r=o.target.elements.image.value.trim();if(r===""){l.show({title:"Error",message:"Please enter a search term to begin your search.",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"});return}else g(r).then(n=>{if(n.totalHits>0){const i=n.hits.map(d).join(`

`);a.innerHTML=i,h.refresh()}else a.innerHTML="",l.show({title:"Error",message:"There are no images matching your search query. Please try again!",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"})}).finally(f());o.target.reset()}function f(){c&&c.remove()}function g(o){const r="https://pixabay.com/api/",n=`?key=42174217-6daf07c41ac875e98ae2151fa&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,i=r+n;return fetch(i).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})}function d({webformatURL:o,largeImageURL:r,tags:n,likes:i,views:e,comments:t,downloads:s}){return`<li class="gallery-item"><a href="${r}"><img class="gallery-image" src="${o}" alt="${n}" /></a>
<div class="description"> <p>Likes <span>${i}</span></p><p>Views <span>${e}</span></p><p>Comments <span>${t}</span></p><p>Downloads <span>${s}</span></p></div></li>`}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
