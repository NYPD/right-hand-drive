document.querySelectorAll('img').forEach((image) => {
  image.setAttribute('data-zoomable', '') 
  var parentElement = image.parentElement;
  if(parentElement.nodeName === 'P')  
    image.parentElement.classList.add('image-p');
});

mediumZoom('[data-zoomable]');