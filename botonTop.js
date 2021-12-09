window.onscroll = function(){

    if(document.documentElement.scrollTop > 100){
        document.querySelector('.boton-container').classList.add('show');
    }else{
        document.querySelector('.boton-container').classList.remove('show');
    }

    document.querySelector('.boton-container').addEventListener('click',()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
}