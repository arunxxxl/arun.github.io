let windowHeightMobi = window.innerHeight*0.6;
let windowHeightDesk= window.innerHeight;
let Mobile = window.innerWidth < 600;
let Desktop = window.innerWidth > 600;
let skill = window.innerHeight*1.4;
let skill_1 = window.innerHeight*1.65;
let skill_2 = window.innerHeight*2.1;
let skill_3 = window.innerHeight*2.5;
let back = window.innerHeight*3.2;
let back2 = window.innerHeight*3.25;


$('.html5').attr("data-slno", skill_1);

let closeNav = () => {
    $('nav').css({
        "width":"0px",
        "height":"0px"
    });
}

$('.navli').click(()=>{
    if (window.pageYOffset > windowHeightMobi) {
        closeNav();
    }
});




$(window).scroll(() => {
    if (window.pageYOffset > windowHeightMobi) {
        if (Mobile) {
            $('.about').removeClass("slidein");
            $('.about-p').removeClass('about-para');
            $('.about-h3').removeClass('from-left');
            $('.about-s').addClass('absolute-side');
        }
        
    }else{
        $('.about').addClass("slidein");
        $('.about-h3').addClass('from-left');
        $('.about-p').addClass('about-para');
        $('.about-s').removeClass('absolute-side');
    }
    if(window.pageYOffset > skill){
        // console.log('shit');
        if (Mobile) {
            $('.skill-intro').removeClass('slidein');
            $('.skill-s').addClass('absolute-side');
            $('.skill-p-1').fadeIn( "slow" );
        }
    } else {
        $('.skill-intro').addClass('slidein');
        $('.skill-s').removeClass('absolute-side');
        $('.skill-p-1').fadeOut();
    }
    
    if (window.pageYOffset > skill_1) {
        if (Mobile) {
            $('.Markup').fadeIn( "slow" );
            $('.FrontEnd-intro').fadeIn("slow");
        }
    } else {
        $('.Markup').fadeOut();
        $('.FrontEnd-intro').fadeOut();
    }
    if (window.pageYOffset > skill_2) {
        if (Mobile) {
            $('.front-1').addClass('transform-height-90');
            $('.front-2').addClass('transform-height-75');
            $('.front-3').addClass('transform-height-85');
            $('.front-4').addClass('transform-height-87');
            $('.front-5').addClass('transform-height-90');
            $('.front-6').addClass('transform-height-90');
            $('.f-deta').attr('display','block');
        }
    } else {
        $('.front-1').removeClass('transform-height-90');
        $('.front-2').removeClass('transform-height-75');
        $('.front-3').removeClass('transform-height-85');
        $('.front-4').removeClass('transform-height-87');
        $('.front-5').removeClass('transform-height-90');
        $('.front-6').removeClass('transform-height-90');
        $('.f-deta').attr('display','none');
    }
    if (window.pageYOffset > skill_3) {
        if (Mobile) {
            $('.lang').fadeIn();
            $('.front-7').addClass('transform-height-85');
            $('.front-8').addClass('transform-height-69');
            $('.front-9').addClass('transform-height-75');
        }
    } else{
        $('.lang').fadeOut();
        $('.front-7').removeClass('transform-height-85');
        $('.front-8').removeClass('transform-height-69');
        $('.front-9').removeClass('transform-height-75');
    }
    if (window.pageYOffset > back) {
        if (Mobile) {
            $('.backend-table').fadeIn("slow");
        }
    } else {
        $('.backend-table').fadeOut("slow");
    }
    if (window.pageYOffset > back2) {
        console.log('damn');
        
        if (Mobile) {
            // $('.back-des-div').css({
            //     "transform":"translateY(100px)",
            //     "opacity":"1"
            // });
            // $('.backend-detail-1').css({
            //     "transform":"scale(1)"
            // });
        }
    }
});