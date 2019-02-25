let windowHeightMobi = window.innerHeight*0.6;
let windowHeightDesk= window.innerHeight;
let Mobile = window.innerWidth < 600;
let Desktop = window.innerWidth > 600;
let skill = window.innerHeight*1.4;
let skill_1 = window.innerHeight*1.65;
let skill_2 = window.innerHeight*2.1;
let skill_3 = window.innerHeight*2.5;
let back = window.innerHeight*3.2;
let back2 = window.innerHeight*3.4;
let persue = window.innerHeight*3.6;
let Progress = window.innerHeight*4;
let Progress_2 = window.innerHeight*4.2;
let Progress_3 = window.innerHeight*4.35;
let contacts = window.innerHeight*5.2;

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
    if (window.pageYOffset > persue) {
        if (Mobile) {
            $('.triger-underline').addClass('special-h1');
            $('.persucing-h2').addClass('damn-persu');
            $('.pers-para').addClass('fromBottom');
        }
    } else {
        $('.triger-underline').removeClass('special-h1');
        $('.persucing-h2').removeClass('damn-persu');
        $('.pers-para').removeClass('fromBottom');
    }
    if (window.pageYOffset > Progress) {
        if (Mobile) {
            $('.My-Progress-h2').addClass('progress-h22');
            $('.progress-spam').addClass('progress-span-class');
            $('.my-progress-p').addClass('fromBottom');
        }
    } else {
        $('.My-Progress-h2').removeClass('progress-h22');
        $('.progress-spam').removeClass('progress-span-class');
        $('.my-progress-p').removeClass('fromBottom');
    }
    if (window.pageYOffset > Progress_3) {
        if (Mobile) {
            $('.charts').addClass('fromBottom');
        }
    } else {
        $('.charts').removeClass('fromBottom');
    }
    if (window.pageYOffset > contacts) {
        if(Mobile){
            $('.contact').removeClass('from-left');
        }
    } else {
        $('.contact').addClass('from-left');
    }
});





google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'My Experece Level');
    data.addRows([
        [1,  1.0],
        [2,  20.0],
        [3,  24.0],
        [4,  22.0],
        [5,  25.0],
        [6,  40.0],
        [7,  55.0],
        [8,  68.0],
        [9,  89.0]
      ]);

      var options = {
        chart: {
          title: 'My Work Timeline',
          subtitle: 'With Progress Level'
        },
        width: 320,
        height: 320,
        axes: {
          x: {
            0: {side: 'top'}
          }
        }
      };

      var chart = new google.charts.Line(document.getElementById('line_top_x'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
