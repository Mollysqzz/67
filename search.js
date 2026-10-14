import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as b,S as v}from"./assets/vendor-BDqN2FGP.js";const L="https://pixabay.com/api/";async function c(e,t){let o=new URLSearchParams({key:"57818136-1468a63ed1a2da3a6e4b51ef9",page:e,per_page:40,q:t,image_photo:"photo",orientation:"horizontal",safesearch:!0});return await b.get(`${L}?${o}`)}let r=document.querySelector(".search-form");document.querySelector("#search");document.querySelector(".icon");let i=document.querySelector(".load-more"),d=document.querySelector("div");i.classList.add("is-hidden");let s="",a=0,p=40,n=1,S=new v(".gallery a",{captionsData:"alt",navText:["&#10094;","&#10095;"]});r.addEventListener("input",$);r.addEventListener("submit",w);i.addEventListener("click",q);function $(e){let t=e.target.value.trim();console.log(t)}async function w(e){e.preventDefault(),d.innerHTML="",a=1,s=r.elements.searchQuery.value;try{let t=await c(a,s);n=Math.ceil(t.data.totalHits/p),m(t.data.hits),i.classList.remove("is-hidden")}catch{}}async function q(){a+=1,a==n&&i.classList.add("is-hidden");try{let e=await c(a,s);n=Math.ceil(e.data.totalHits/p),m(e.data.hits)}catch{}}function m(e){let t=e.map(({webformatURL:o,largeImageURL:l,likes:u,views:h,comments:f,downloads:g,tags:y})=>`<div class="photo-card">
        <a href=${l}>
        <img src="${o}" alt="${y}" loading="lazy" width="300" height="200" />
        </a>
        <div class="info">
          <p class="info-item">
            <b> Likes </b>
            ${u}
          </p>
          <p class="info-item">
            <b>Views </b>
            ${h}
          </p>
          <p class="info-item">
            <b>Comments </b>
            ${f}
          </p>
          <p class="info-item">
            <b>Downloads </b>
            ${g}
          </p>
        </div>
      </div>`).join("");console.log(t),d.insertAdjacentHTML("beforeend",t),S.refresh()}
//# sourceMappingURL=search.js.map
