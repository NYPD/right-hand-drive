mediumZoom('[data-zoomable]')

document.querySelectorAll('.container table').forEach((table) => {
  var divContainerElement = document.createElement('div')
  divContainerElement.classList.add('table-container')

  table.after(divContainerElement)
  divContainerElement.appendChild(table.cloneNode(true))
  table.remove()
});

//theme.js has a window.onload
window.addEventListener("load", function (event) {
  document.querySelector('body').removeAttribute('data-loading')
}, false)