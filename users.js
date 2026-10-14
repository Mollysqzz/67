import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as n}from"./assets/vendor-BDqN2FGP.js";let a=document.querySelector(".btn"),l=document.querySelector(".user-list"),o=1,s=3;a.addEventListener("click",async()=>{try{let e=await c();console.log(e),i(e),o+=1,o>1&&(a.textContent="get more user")}catch(e){console.log(e)}});async function c(){let t=`https://jsonplaceholder.typicode.com/users?${new URLSearchParams({_limit:s,_sort:"name",_page:o})}`;return(await n.get(t)).data}function i(e){console.log(e);let t=e.map(r=>`<li>
    <p>
    Name: ${r.name}</p>
    <p>
    Email:${r.email}</p></li>`).join("");l.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=users.js.map
