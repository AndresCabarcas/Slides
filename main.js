let presentation = document.querySelector('.presentation');
let slides =  document.querySelectorAll('.slide');
let currentSlide =  document.querySelector('.slide.show');

var slideNumber  = document.querySelector('.slide-no');
var leftBtn =  document.querySelector('#left-btn');
var rightBtn =  document.querySelector('#right-btn');

let presentationController = document.querySelector('.presentation-controller');
var fullScreen = document.querySelector('#full-screen');
var smallScreen = document.querySelector('#small-screen');
var screenStatus = 0;

var currentSlideNo = 1;
var totalSlides = 0;

// Añadiendo enventos a los botones

leftBtn.addEventListener('click', moveToLeftSlide);
rightBtn.addEventListener('click', moveToRightSlide);
fullScreen.addEventListener('click', fullScreenPresentation);
smallScreen.addEventListener('click', smallScreenPresentation);

init();

function init(){

    getCurrentSlideNo();
    totalSlides = slides.length;
    setSlideNo();
    hideLeftBtn();
    hideRightBtn();

}

function hideLeftBtn(){
    if(currentSlideNo == 1){
        leftBtn.classList.remove('show');
    }else{
        leftBtn.classList.add('show');
    }
}

function hideRightBtn(){
    if(currentSlideNo == totalSlides){
        rightBtn.classList.remove('show');
    }else{
        rightBtn.classList.add('show');
    }
}

function moveToRightSlide(){

    var tempSlide = currentSlide;
    currentSlide = currentSlide.nextElementSibling;
    tempSlide.classList.remove('show');
    currentSlide.classList.add('show');

    init();

}

function moveToLeftSlide(){

    var tempSlide = currentSlide;
    currentSlide = currentSlide.previousElementSibling;
    tempSlide.classList.remove('show');
    currentSlide.classList.add('show');

    init();

}

function fullScreenPresentation(){

    presentationController.classList.add('full-screen');
    fullScreen.classList.remove('show');
    smallScreen.classList.add('show');
    screenStatus = 1;

}

function smallScreenPresentation(){

    presentationController.classList.remove('full-screen');
    fullScreen.classList.add('show');
    smallScreen.classList.remove('show');
    screenStatus = 0;
}

function getCurrentSlideNo(){

    var counter = 0;
    slides.forEach(slide => {
        counter++;
        if(slide.classList.contains('show')){
               currentSlideNo = counter;
        }
    });

}

function setSlideNo(){

    slideNumber.innerText = `${currentSlideNo} of ${totalSlides}`;

}

var things = ['Herencia','Polimorfismo','Clases','Objetos','Abstraccion','Variables','Metodos','Diseño','Estructura','Escritura','Sintaxis','writing','writing','writing','writing','writing','programming','programming','programming','programming','programming','concluding','programming','thinking','painting','painting','painting','painting','painting','sewing','sketching','ruminating','deliberating','pondering','contemplating','abstracting','abstracting','abstracting','abstracting','abstracting','abstracting','optimising','optimising','optimising','optimising','optimising','optimising','refactoring','refactoring','refactoring','objectifying','simplifying','decoupling','debugging','debugging','debugging','debugging','debugging','debugging','configuring','streamlining','searching','tweaking','editing'];
var junk = ['#','@','%','*','&amp;','&lt;','&gt;','_','=','+','[',']','|','-','!','?','X'];

function randomInt(min, max) {
  return Math.round(min + (Math.random() * (max-min)));
}

(function tick() {
  var txt = things[randomInt(0, things.length-1)];
  var chars = txt.split('');
  var glitch = randomInt(0, 3);
  for (var i = 0; i < glitch; i++)
  {
    chars[randomInt(0, chars.length-1)] = junk[randomInt(0, junk.length-1)];
  }
  txt = chars.join('');
  var x = document.getElementById('ing');
  x.innerHTML = txt;
  window.setTimeout(tick, randomInt(16,400));
})();
