window.addEventListener('DOMContentLoaded', () =>{

const search = document.querySelector('.fa-search'),
      watchBtn = document.querySelector('[data-watch]'),
      watch = document.querySelector('.watch'),
      inputSearch = document.querySelector('.add__search'),
      header = document.querySelector('.header'),
      loader = document.querySelector('.svg-frame'),
      navigation = document.querySelector('.navigation');
     
    
    search.addEventListener('click', () =>{
        inputSearch.classList.add('watch__ani','show');
        inputSearch.classList.remove('hide');

       
    });
     header.addEventListener('click', (e) =>{
        const target = e.target;
        if(target && target.classList.contains('fa-search')){
        inputSearch.classList.add('watch__ani','show');
        }
        else{
        inputSearch.classList.add('hide');
        inputSearch.classList.remove('watch__ani','show');
        }
    });
    watchBtn.addEventListener('click', () =>{
        watch.classList.add('watch__ani', 'show');
        watch.classList.remove('hide');
    });
    watch.addEventListener('click', (e) =>{
        if(e.target == watch){
        watch.classList.add('hide');
        watch.classList.remove('watch__ani', 'show');
        }
    });

    // function byScroll () {
    //     if(window.pageYOffset == 0 ){
    //         hideColor();
    //     }
    //     else{
    //         showColor();
    //     }
    //   }
    //   byScroll();
    //   window.addEventListener('scroll', byScroll);

    function byScroll (){
        
        if(window.pageYOffset == 0){
            navigation.classList.remove('add__navigation__color');
            console.log('delete');
        }
        else{
            navigation.classList.add('add__navigation__color');
            console.log('add');

        }
    }
    byScroll();
    window.addEventListener('scroll', byScroll);
      
    setTimeout(() => {
        loader.classList.add('hide');
    }, 1500);

});
