!function(){"use strict";var t,e,i=[{title:"Lorem ipsum!",description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea."]},{title:"Lorem ipsum!2",description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea."]},{title:"Lorem ipsum!3",description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea."]},{title:"Lorem ipsum!4",description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea."]},{title:"Lorem ipsum!5",description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea."]},{title:"Lorem ipsum!6",description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea."]}],a=document.querySelector(".section__scroll__scrollbar_block_scroll-thumb"),s=document.querySelector(".section__content__info__footer_number"),n=document.querySelector(".section__scroll__scrollbar_block__count-start"),r=document.querySelector(".section__content__info__middle_title"),o=document.querySelector(".section__content__info__middle_describe"),l=(document.querySelector(".section"),document.querySelector(".section__scroll__image")),m=0;function u(t){var e=!0;if(t){if("describe_item"===t.target.className&&t.target.parentElement.scrollHeight>t.target.parentElement.clientHeight)return;e=(t.deltaY||t.detail||t.wheelDelta)>0}if(e){if(m>=i.length-1)return;m++}else{if(m<=0)return;m--}a.style.transform="translateY(".concat(100*m,"%)"),c(s,m+1),c(n,m+1),r.innerHTML=i[m].title;var l=i[m].description.reduce((function(t,e){return t+'<p class="describe_item">'.concat(e,"</p>")}),"");o.innerHTML=l}function c(t,e){t.innerHTML="0".concat(e)}window.addEventListener("wheel",(t=u,1e3,e=!1,function(){e||(t.apply(this,arguments),e=!0,setTimeout((function(){return e=!1}),1e3))})),l.addEventListener("click",(function(t){u(null)}))}();
//# sourceMappingURL=index.e6f0bbb9029f1e5e05bc.js.map