const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){n=setInterval(o,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}));let n=null;function o(){body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.f36d747b.js.map
