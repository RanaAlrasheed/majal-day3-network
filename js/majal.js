Reveal.initialize({hash:true,controls:true,progress:true,center:false,transition:'slide',backgroundTransition:'fade',width:1280,height:720,margin:.04});
document.querySelectorAll('.port-grid button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.port-grid button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected')}));
