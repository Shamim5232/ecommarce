menu_bars=document.querySelector('#menu_bars');
MenuItem=document.querySelector('.nav_items');
search_Icon=document.querySelector('#search_Icon');
Mobile_search=document.querySelector('.Mobile_search');

menu_bars.onclick=()=>{
    menu_bars.classList.toggle('fa-times')
    MenuItem.classList.toggle('MenuActive')

    search_Icon.classList.remove('fa-times')
    Mobile_search.classList.remove('SearchActive')
}
search_Icon.onclick=()=>{
    search_Icon.classList.toggle('fa-times')
    Mobile_search.classList.toggle('SearchActive')

    menu_bars.classList.remove('fa-times')
    MenuItem.classList.remove('MenuActive')
}



$(document).ready(function() {
    $(window).scroll(function () { 
         if($(window).scrollTop() > 200){
             $('.navBar').addClass("sticky")
         }else{
             $(".navBar").removeClass("sticky")
         }
     });
  });