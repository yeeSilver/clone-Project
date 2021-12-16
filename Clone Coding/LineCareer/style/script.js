document.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    
    if(document.documentElement.scrollTop != 0){
        header.style.backgroundColor='rgba(255, 255, 255, 0.9)';
        header.style.color='black';
    }else{
        header.style.background='none';
        header.style.color= 'white';
    }
});