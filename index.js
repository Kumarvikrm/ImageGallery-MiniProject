let scrollContainerEl = document.querySelector(".gallery");
let backBtnEl = document.getElementById("backBtn");
let nextBtnEl = document.getElementById("nextBtn");


scrollContainerEl.addEventListener("wheel", (evt)=> {
  evt.preventDefault();
  scrollContainerEl.scrollLeft += evt.deltaY;
  scrollContainerEl.style.scrollBehavior = "auto"

})

nextBtnEl.addEventListener("click", ()=>{
  scrollContainerEl.style.scrollBehavior = "smooth"
  scrollContainerEl.scrollLeft += 900;
});

backBtnEl.addEventListener("click", ()=>{
  scrollContainerEl.style.scrollBehavior = "smooth"
  scrollContainerEl.scrollLeft -= 900;
})