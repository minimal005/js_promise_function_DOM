var e=document.createElement("div");function t(e,t){return new Promise(function(n){e.addEventListener(t,function(c){n("It was ".concat(t," on the element: ").concat(e.nodeName))})})}e.style.cssText="display:flex; flex-direction: column; row-gap: 10px; padding-left: 10px",document.body.append(e);var n=function(t){var n=document.createElement("div");n.classList.add("message"),n.textContent=t,e.append(n)},c=document.getElementById("login"),d=document.getElementById("password"),o=document.getElementById("submit");t(c,"click").then(n),t(d,"click").then(n),t(o,"click").then(n),t(c,"input").then(n),t(d,"input").then(n),t(c,"blur").then(n),t(d,"blur").then(n),t(o,"blur").then(n);
//# sourceMappingURL=index.f5b16326.js.map
