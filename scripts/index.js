
const menuToggle = document.getElementsByClassName("burger-menu")[0]
const menu = document.getElementsByClassName("menu")[0]
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open")
    menu.classList.toggle("d-block")

})


// adding hid function to questions

let questions = document.getElementsByClassName("question-container")

Array.from(questions).map(element => (
    element.addEventListener("click", () => {

        element.getElementsByClassName("answer")[0].classList.toggle("d-answer")

    })
))



let slideIndex = 0
showSlides()
let dots = document.getElementsByClassName("nav-dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        slideIndex = i
        dots[i].style.backgroundColor = "gray"
        dots[i].style.cursor = "pointer"

        showSlides()
    })

}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("testimonial-card");
    let dots = document.getElementsByClassName("nav-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "#00000000"
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";

    dots[slideIndex - 1].style.backgroundColor = "gray"



    // Change image every 10 seconds
    setTimeout(showSlides, 10000);

}


let tabs = document.getElementsByClassName("program-item");
let programCard = document.getElementsByClassName("program-details");
let programBg=document.getElementsByClassName("bg-orange")[0]
for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener("click", () => {
        for (let x = 0; x < tabs.length; x++) {
            programCard[x].style.display = "none"
            tabs[x].classList.remove("active") 
            tabs[x].style.color="#232323"


        }
       
            if(i!=0)
            programCard[i].style.borderTopLeftRadius="20px"

       

        programCard[i].style.display = "flex"
        tabs[i].classList.add("active") 
        tabs[i].style.color=""

        if(i==1){
            tabs[i].style.color="#28eea7"
            programBg.style.backgroundColor="#28eea7"
        }else if(i==2){
            tabs[i].style.color="#9864da"
            programBg.style.backgroundColor="#9864da"

        }
        else if(i==3){
            tabs[i].style.color="#fb508e"
            programBg.style.backgroundColor="#fb508e"

        }
       
    })





}



// Overlay Effect

let overlay=document.getElementsByClassName("overlay-left")[0]

setInterval(()=>{
   setTimeout(function(){ overlay.style.backgroundColor="rgba(40, 238, 167, 0.93)"},1000)
   setTimeout(function(){ overlay.style.backgroundColor="rgba(251, 80, 142, 0.93)"},1500)
   setTimeout(function(){ overlay.style.backgroundColor="rgba(152, 100, 218, 0.93)"},2000)


},2000)


  // array with texts to type in typewriter
  var dataText = [ "SOFTWARE ENGINEER?","Data Engineering?", "UI/UX Design?"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1 .typing").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);

