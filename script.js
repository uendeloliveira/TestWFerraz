// Passar carrossel
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
// Passar conteúdo carrossel 
for (let i = 2; i <= 6; i++) {
    $(`.slid-t${i}, .slide-b${i}, .slide-bb${i}`).hide();
}
  
$('.after, .before').click(() => {
const points = ['.point1', '.point2', '.point3', '.point4', '.point5', '.point6'];
const elements = ['.slid-t', '.slide-b', '.slide-bb'];

points.forEach((point, index) => {
    if ($(point).hasClass('selected')) {
        elements.forEach(elementClass => {
            $(`${elementClass}${index + 1}`).show();
        });
    } else {
        elements.forEach(elementClass => {
            $(`${elementClass}${index + 1}`).hide();
        });
    }
});
});