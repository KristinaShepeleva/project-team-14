!function(){var e,t,n,o;new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},autoHeight:!0,autoplay:{delay:2e3,disableOnInteraction:!0}});e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.d96afa2f.js.map