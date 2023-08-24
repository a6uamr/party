$(function(){
    $('.o').fadeOut(1000,function(){$('.o').remove();});
    $('body').css('overflow','auto');

  $('.b').click(()=>{
    $('#home>nav').animate({width:250});
    if($('#home').width()>390) $('.b').animate({marginLeft:250});
  });
  $('.x').click(()=>{
    $('#home>nav').animate({width:0});
    $('.b').animate({marginLeft:0});
  });

  $("[href^='#']").click((e)=>{
    $('html,body').animate({scrollTop:$($(e.target).attr('href')).offset().top});
  });

  $('#band h2').click((e)=>{
    $(e.target).next().slideToggle();
    $('#band p').not($(e.target).next()).slideUp();
  });

  let s=(new Date('Thu Aug 31 2023 16:00:00').getTime()-new Date().getTime())/1000,
    d,D,h,H,m,M,S;
  const T=document.querySelectorAll('#countdown>span');
  function f(){
    d=s/60/60/24, D=Math.floor(d);
    h=(d-D)*24, H=Math.floor(h);
    m=(h-H)*60, M=Math.floor(m);
    S=Math.round((m-M)*60)
    if(S==60){M++; S=0;}
    T[0].textContent=D+' d';
    T[1].textContent=H+' h';
    T[2].textContent=M+' m';
    T[3].textContent=S+' s';
  }
  f(); setInterval(()=>{s--; f();},1000);

  const i=document.querySelector('#contact textarea'),
    c=document.querySelector('#contact>form span');
  function ff(){c.textContent=i.getAttribute('maxlength')-i.value.length;}
  ff(); i.addEventListener('input',ff);  
});