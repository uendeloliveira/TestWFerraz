const carrossel = document.querySelector(".carrossel");
const points = document.querySelectorAll(".points > div");
const beforeButton = carrossel.querySelector(".before");
const afterButton = carrossel.querySelector(".after");

let selectedIndex = 0;

afterButton.addEventListener("click", () => {
    points[selectedIndex].classList.remove("selected");
    selectedIndex = (selectedIndex + 1) % points.length;
    points[selectedIndex].classList.add("selected");
});

beforeButton.addEventListener("click", () => {
    points[selectedIndex].classList.remove("selected");
    selectedIndex = (selectedIndex - 1 + points.length) % points.length;
    points[selectedIndex].classList.add("selected");
});


$('.slid-t2, .slide-b2, .slide-bb2').hide();
$('.slid-t3, .slide-b3, .slide-bb3').hide();
$('.slid-t4, .slide-b4, .slide-bb4').hide();
$('.slid-t5, .slide-b5, .slide-bb5').hide();
$('.slid-t6, .slide-b6, .slide-bb6').hide();

$('.after, .before').click(()=>{
    if($('.point1').hasClass('selected')){
        $('.slid-t1, .slide-b1, .slide-bb1').show();
        $('.slid-t2, .slide-b2, .slide-bb2').hide();
        $('.slid-t3, .slide-b3, .slide-bb3').hide();
        $('.slid-t4, .slide-b4, .slide-bb4').hide();
        $('.slid-t5, .slide-b5, .slide-bb5').hide();
        $('.slid-t6, .slide-b6, .slide-bb6').hide();
    }
    if($('.point2').hasClass('selected')){
        $('.slid-t1, .slide-b1, .slide-bb1').hide();
        $('.slid-t2, .slide-b2, .slide-bb2').show();
        $('.slid-t3, .slide-b3, .slide-bb3').hide();
        $('.slid-t4, .slide-b4, .slide-bb4').hide();
        $('.slid-t5, .slide-b5, .slide-bb5').hide();
        $('.slid-t6, .slide-b6, .slide-bb6').hide();
    }
    if($('.point3').hasClass('selected')){
        $('.slid-t1, .slide-b1, .slide-bb1').hide();
        $('.slid-t2, .slide-b2, .slide-bb2').hide();
        $('.slid-t3, .slide-b3, .slide-bb3').show();
        $('.slid-t4, .slide-b4, .slide-bb4').hide();
        $('.slid-t5, .slide-b5, .slide-bb5').hide();
        $('.slid-t6, .slide-b6, .slide-bb6').hide();
    }
    if($('.point4').hasClass('selected')){
        $('.slid-t1, .slide-b1, .slide-bb1').hide();
        $('.slid-t2, .slide-b2, .slide-bb2').hide();
        $('.slid-t3, .slide-b3, .slide-bb3').hide();
        $('.slid-t4, .slide-b4, .slide-bb4').show();
        $('.slid-t5, .slide-b5, .slide-bb5').hide();
        $('.slid-t6, .slide-b6, .slide-bb6').hide();
    }
    if($('.point5').hasClass('selected')){
        $('.slid-t1, .slide-b1, .slide-bb1').hide();
        $('.slid-t2, .slide-b2, .slide-bb2').hide();
        $('.slid-t3, .slide-b3, .slide-bb3').hide();
        $('.slid-t4, .slide-b4, .slide-bb4').hide();
        $('.slid-t5, .slide-b5, .slide-bb5').show();
        $('.slid-t6, .slide-b6, .slide-bb6').hide();
    }
    if($('.point6').hasClass('selected')){
        $('.slid-t1, .slide-b1, .slide-bb1').hide();
        $('.slid-t2, .slide-b2, .slide-bb2').hide();
        $('.slid-t3, .slide-b3, .slide-bb3').hide();
        $('.slid-t4, .slide-b4, .slide-bb4').hide();
        $('.slid-t5, .slide-b5, .slide-bb5').hide();
        $('.slid-t6, .slide-b6, .slide-bb6').show();
    }
})