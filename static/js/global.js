document.querySelectorAll('img').forEach((image) => {
  image.setAttribute('data-zoomable', '') 
  image.parentElement.classList.add('image-p')
});

mediumZoom('[data-zoomable]');