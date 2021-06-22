
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