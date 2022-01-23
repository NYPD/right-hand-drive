document.querySelectorAll('img').forEach((image) => {
  image.setAttribute('data-zoomable', '') 
});

mediumZoom('[data-zoomable]');