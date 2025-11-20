// script.js — small helpers (no critical JS required)
// Currently adds the current year to the footer.

document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;
});

/* If you'd like a JS-powered mobile menu instead of the CSS checkbox hack,
   I can add a small toggle script. For now the layout is CSS-only. */
