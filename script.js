(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.menu');
  if(b&&m){
    b.addEventListener('click',function(){
      m.classList.toggle('open');
      b.setAttribute('aria-expanded',m.classList.contains('open'));
    });
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open')})});
  }
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  } else { els.forEach(function(el){el.classList.add('in')}); }
  var y=document.getElementById('yr'); if(y){y.textContent=new Date().getFullYear()}
  // duplicate ticker content for seamless loop
  var t=document.querySelector('.ticker .track');
  if(t){t.innerHTML=t.innerHTML+t.innerHTML}
})();
