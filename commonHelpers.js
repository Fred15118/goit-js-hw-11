import{S as f,i as a}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",d="43978229-66aec4be0aecfd6358506c605";function m(r){const s=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function h(r){return r.map(({largeImageURL:i,webformatURL:l,tags:e,likes:t,views:n,comments:c,downloads:u})=>`<li class="item-results">
          <a href="${i}" class="gallery-link">
            <img src="${l}" alt="${e}" class="gallery-img"/>
          </a>
          <div class="wrap-info">
            <ul class="list-info">
              <li class="item-info">
                <p class="headline-info">Likes</p>
                <p class="text-info">${t}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Views</p>
                <p class="text-info">${n}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Comments</p>
                <p class="text-info">${c}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Downloads</p>
                <p class="text-info">${u}</p>
              </li>
            </ul>
          </div>
        </li>`).join("")}const g=new f(".gallery-link",{captionsData:"alt",captionDelay:250}),o={userRequest:document.querySelector(".form__input"),form:document.querySelector(".form"),resultsList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function y(r){if(r.preventDefault(),!o.userRequest.value.trim())return a.warning({message:"That field can't be empty!",position:"topRight",backgroundColor:"red"});o.resultsList.innerHTML="",o.loader.classList.toggle("is-hidden"),m(o.userRequest.value.trim()).then(s=>{r.target.reset(),s.hits.length===0&&a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.resultsList.insertAdjacentHTML("beforeend",h(s.hits)),g.refresh()}).catch(s=>console.log(s)).finally(()=>{o.loader.classList.toggle("is-hidden")})}o.form.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
