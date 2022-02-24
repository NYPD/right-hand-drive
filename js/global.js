document.querySelectorAll('.container img').forEach((image) => {
  image.setAttribute('data-zoomable', '') 
  var parentElement = image.parentElement;
  if(parentElement.nodeName === 'P')  
    image.parentElement.classList.add('image-p');
});

mediumZoom('[data-zoomable]');

document.querySelectorAll('.container table').forEach((table) => {
  var divContainerElement = document.createElement('div')
  divContainerElement.classList.add('table-container')

  table.after(divContainerElement)
  divContainerElement.appendChild(table.cloneNode(true))
  table.remove()
});

//Dark theme fix
var darkThemeCSSDisabled = document.getElementById('dark-mode-theme').disabled === true
if (darkThemeCSSDisabled) 
  document.querySelector('body').setAttribute('data-dark-theme', 'false')
else
  document.querySelector('body').setAttribute('data-dark-theme', 'true')


var toggle = document.getElementById('dark-mode-toggle')
toggle.addEventListener('click', () => {
  if (toggle.className === 'fas fa-moon') 
    document.querySelector('body').setAttribute('data-dark-theme', 'true')
   else if (toggle.className === 'fas fa-sun') 
    document.querySelector('body').setAttribute('data-dark-theme', 'false')
})

document.dispatchEvent(new CustomEvent('scroll'))

if (document.getElementById('backtotopButton') !== null) {
  document.getElementById('backtotopButton').style.display = 'block'
}