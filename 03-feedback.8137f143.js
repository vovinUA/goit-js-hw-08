var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,c=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var o,i,r,a,f,u,l=0,d=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(O,t),d?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-l>=r}function O(){var e=m();if(h(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return b?c(n,r-(e-l)):n}(e))}function S(e){return f=void 0,g&&o?y(e):(o=i=void 0,a)}function T(){var e=m(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(b)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,v(n)&&(d=!!n.leading,r=(b="maxWait"in n)?s(p(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},T.flush=function(){return void 0===f?a:S(m())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||i.test(e)?r(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),g=_.throttle((function(){const e=b.elements.email.value,t=b.elements.message.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))}),500);b.addEventListener("input",g);b.addEventListener("submit",(function(e){e.preventDefault();const t=b.elements.email.value,n=b.elements.message.value;console.log(`email: ${t}, message: ${n}`),localStorage.setItem("feedback-form-state",""),b.reset()}));const y=JSON.parse(localStorage.getItem("feedback-form-state")||"{}");b.elements.email.value=y.email||"",b.elements.message.value=y.message||"";
//# sourceMappingURL=03-feedback.8137f143.js.map