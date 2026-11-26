/* Wspólne menu mobilne: rozwijane grupy + ukrywanie dolnego paska */
(function(){
  var nav=document.getElementById('mobileNav'); if(!nav) return;
  var here=(location.pathname.split('/').pop()||'index.html');
  nav.querySelectorAll('.mn-group').forEach(function(g){
    var btn=g.querySelector('.mn-toggle');
    btn.addEventListener('click',function(){
      var open=!g.classList.contains('open');
      nav.querySelectorAll('.mn-group.open').forEach(function(o){o.classList.remove('open');o.querySelector('.mn-toggle').setAttribute('aria-expanded','false');});
      if(open){g.classList.add('open');btn.setAttribute('aria-expanded','true');}
    });
  });
  nav.querySelectorAll('a[href]').forEach(function(a){
    if(a.getAttribute('href').split('#')[0]===here && !a.classList.contains('mn-cta')){
      a.classList.add('mn-current');
      var g=a.closest('.mn-group'); if(g && !nav.querySelector('.mn-group.open')){g.classList.add('open');g.querySelector('.mn-toggle').setAttribute('aria-expanded','true');}
    }
  });
  new MutationObserver(function(){document.body.classList.toggle('mn-open',nav.classList.contains('open'));}).observe(nav,{attributes:true,attributeFilter:['class']});
})();
