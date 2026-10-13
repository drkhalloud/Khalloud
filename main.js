document.documentElement.className+=' js';
(function(){var m=document.getElementById('menu'),o=document.getElementById('open'),c=document.getElementById('close');
if(m){function s(v){m.classList.toggle('open',v);document.body.classList.toggle('lock',v);o.setAttribute('aria-expanded',v);(v?c:o).focus()}
o.onclick=function(){s(true)};c.onclick=function(){s(false)};
m.querySelectorAll('a').forEach(function(a){a.onclick=function(){m.classList.remove('open');document.body.classList.remove('lock');o.setAttribute('aria-expanded',false)}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open'))s(false)})}
var r=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});r.forEach(function(x){io.observe(x)})}else{r.forEach(function(x){x.classList.add('in')})}})();