$(function(){
    //to display team name
    setTimeout(function(){
        $('.fly-in-text').removeClass('hidden');
    },0)

    //to display nav bar
    setTimeout(function(){
        $('nav').removeClass('initial');
    },200)

    //to hide and display navbar and FAB on scroll
    var elem = $(document);
    var lastScroll = 0;

    elem.on(('mousemove'),function(){
        var currScroll = $(this).scrollTop();

        if(currScroll>lastScroll) {
            $("nav").addClass("hidden");
            // $("#fab").removeClass("fabhide")
        }
        else {
            $("nav").removeClass('hidden');
            // $("#fab").addClass('fabhide');
        }

        lastScroll = currScroll;
        });


});

//to display team members

$(window).scroll(function() {
page();
fastScroll();
});

function fastScroll(){
var hT = $('.roster').offset().top,
   hH = $('.roster').outerHeight(),
   wH = $(window).height(),
   wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
   $('.teamMember').removeClass('init');
   }
}

function page(){
var scroll = $(window).scrollTop();
// $('.moto').css('position',' absolute');
// $('.moto').css('top',+(scroll*0.5)+'px');

$('.roshead').css('position',' absolute');
$('.roshead').css('top',+(scroll*0.5)+'px');

$('.mid').css('position',' absolute');
$('.mid').css('top',-(scroll*2)+'px');
}


var elem;

function getElem(ele){
elem=ele;


$(document).ready(function() {
    $(elem).mousemove(function(e){
        var movX = (e.pageX * (-1 / 15));
        var movY = (e.pageY * (-1 / 15));
        $(elem).css('background-position', movX + 'px ' + movY + 'px');
    });
});
}

// Sponsor
var sone='<p> bala gaandu</p>';
function showInfo(id){
$('.sponsorInfo').css('transform','translate(0%) rotate(0deg)');
$(id).css('height','20vw');
$(id).css('width','20vw');
if(id=='sone'){	$('.sponsorInfo').innerHTML=sone;}
}
function hideInfo(id){
$('.sponsorInfo').css('transform','translate(200%) rotate(180deg)');
$(id).css('height','15vw');
$(id).css('width','15vw');
}