const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const containerDiv = document.querySelector(".container")
const circleDiv = document.querySelector(".circle")

openBtn.addEventListener("click", ()=>{
	containerDiv.classList.add("show-nav")
	circleDiv.classList.add("close")
})

closeBtn.addEventListener("click", ()=>{
	containerDiv.classList.remove("show-nav")
	circleDiv.classList.remove("close")
})