
const faders = document.querySelectorAll('.fade-in')
const opt = {rootMargin: "-200px"};

const faderObserver = new IntersectionObserver(function (entries, faderObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.add("appear")
    faderObserver.unobserve(entry.target)
  })
}, opt)

faders.forEach(fader => {
  faderObserver.observe(fader)
})

// const animationOpts = {threshold: ".3"}
// const animationObserver = new IntersectionObserver(intersectingAnimation, animationOpts);

// function intersectingAnimation(entries, animationObserver) {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       console.log(document.getElementsByClassName("plane-animation"))
//       document.getElementsByClassName("plane-animation")[0].classList.add("play")
//       return;
//     }
//     document.getElementsByClassName("plane-animation")[0].classList.remove("play")
//   })
// }

// animationObserver.observe(document.getElementById("volunteer"));