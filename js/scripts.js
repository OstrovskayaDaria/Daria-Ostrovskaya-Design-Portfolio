

var rellax = new Rellax('.rellax', {
  center: true
});

const sun = document.getElementById('sun')
const svgElements = document.querySelectorAll('path')
sun.onmouseover = function() {
  svgElements.forEach(function(i) {
    i.classList.add('hovered')
  })
}
sun.onmouseout = function() {
  svgElements.forEach(function(i) {
    i.classList.remove('hovered')
  })
}
