// 슬라이드
let visual_slide = new Swiper('.visual_slide',{
    autoplay:{ 
        delay:4000, 
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true, 
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});



// 탭메뉴
const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content >div');
const highLight = document.querySelector('.highlight');

function showContent(num){
    tabContent.forEach(function(item){
        item.style.display='none';

    });
    tabContent[num].style.display='block';
}
showContent(0);

tabMenu.forEach(function(item,idx){
    item.addEventListener('click', function(e){
        e.preventDefault();
        showContent(idx);
        moveHighLight(idx);
    });
});

function moveHighLight(num){
    const newLeft = tabMenu[num].offsetLeft;
    const newWidth = tabMenu[num].offsetWidth;
    console.log(newleft,newWidth);
    highLight.style.left=newLeft + 'px';
    highLight.style.width = newWidth +'px';
}


// tabmenu 서식
$(document).ready(function(){
    let tabmenu = $('.tab-menu>li>a');
    tabmenu.click(function(){
        tabmenu.removeClass('on');
        $(this).addClass('on');
    });
});
// menu 서식
$(document).ready(function(){
    let menu = $('.navi>li>label');
    menu.click(function(){
        menu.removeClass('on');
        $(this).addClass('on');
    });
});
$(document).ready(function(){
    let menu = $('.navi>li>label');
    menu.mouseenter(function(){
        menu.removeClass('on');
        $(this).addClass('on');
    });
});

