document.querySelectionAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoview({
            behavior:'smooth'
        });
    });
});

window.addEventListener('scroll',()=>{
    const navbar= document.querySelector('.navbar');
    window.scrollY>50?
    navbar.Style.backgroundColor='rgba(10,10,10,0.98)':
    navbar.style.backgroundColor='rgba(10,10,10,0.95)';
});