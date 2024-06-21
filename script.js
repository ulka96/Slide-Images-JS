const sliderEl = document.querySelector(".slider");
const slideEls = document.querySelectorAll(".slide");

const leftBtnEl = document.getElementById("left__btn");
const rightBtnEl = document.getElementById("right__btn");

const containerEl = document.querySelector(".container")


let counter = 0;
rightBtnEl.addEventListener("click", () => {
  
  if(counter<6) {
    counter++
  }
  else{
    counter=0
  }
  sliderEl.style.transform= `translateX(${-counter*310}px)`
})

leftBtnEl.addEventListener("click", () => {
    if(counter>0) {
      counter--
    }
    else{
      counter=6
    }
    sliderEl.style.transform= `translateX(${-counter*310}px)`

  })


 
