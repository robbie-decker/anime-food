(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();const m=document.querySelector("img"),d=document.getElementById("img_wrapper"),h=20;let s,a,f=["Yummy!","Delicious!","Tasty!","Delectable!","Delightful!","Oishi!","Sugoi!","Appetizing","Scrumptious!"];async function g(e){const t=await fetch(`https://tenor.googleapis.com/v2/search?q=anime+food&key=AIzaSyBn9j8LM5ivOjbmug-O5mgGlnRBaoK3m4Y&limit=${h}&pos=${e}&media_filter=gif`,{mode:"cors"});return console.log(t),await t.json()}const p=document.getElementById("refresh");p.addEventListener("click",()=>{s.length!=0?u():g(a).then(e=>{s=e.results,a=e.next,u()})});const y=document.getElementId("vapor");console.log(y.children);p.addEventListener("mouseout",()=>{});function u(){let e=i(0,s.length-1);m.src=s[e].media_formats.gif.url,s.splice(e,1),v()}function v(){let e=document.createElement("p");e.textContent=f[i(0,f.length-1)],e.classList.add("centered");let t=i(1,8)*10;e.style.left=`${t}%`;let l=i(0,1),n;l==0?(n=i(75,90),e.style.top=`${n}%`):(n=i(5,20),e.style.top=`${n}%`),e.style.transition="transform 3s",e.style.transform=`translate(${-(t-30)}%, ${-(n-50)}%)`,e.style.offsetWidth=0,e.style.overflow="hidden",d.appendChild(e),e.getBoundingClientRect(),e.style.transform=`translate(${t-70}%, ${n-50}%)`,setTimeout(()=>{d.removeChild(e)},3e3)}function i(e,t){return Math.floor(Math.random()*(t-e+1)+e)}g(0).then(e=>{s=e.results,a=e.next;let t=i(0,s.length-1);m.src=s[t].media_formats.gif.url,s.splice(t,1)});