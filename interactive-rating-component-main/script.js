const mainContainer = document.querySelector(".rating__container")
const thanksContainer = document.querySelector(".thanks__container")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
})