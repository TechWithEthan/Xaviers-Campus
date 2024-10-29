document.querySelectorAll('.gallery-item img').forEach((img, index) => {
  img.addEventListener('click', function() {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = this.src; // Set the modal image source to the clicked image

    const modalCaption = document.getElementById('modalCaption');
    modalCaption.innerText = this.alt || 'Image'; // Set caption from alt attribute or default to 'Image'

    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show(); // Show the modal

    // Handle next/previous image navigation
    document.getElementById('nextBtn').onclick = function() {
      const nextIndex = (index + 1) % document.querySelectorAll('.gallery-item img').length;
      const nextImage = document.querySelectorAll('.gallery-item img')[nextIndex];
      modalImage.src = nextImage.src;
      modalCaption.innerText = nextImage.alt || 'Image';
      index = nextIndex; // Update index to the next image
    };

    document.getElementById('prevBtn').onclick = function() {
      const prevIndex = (index - 1 + document.querySelectorAll('.gallery-item img').length) % document.querySelectorAll('.gallery-item img').length;
      const prevImage = document.querySelectorAll('.gallery-item img')[prevIndex];
      modalImage.src = prevImage.src;
      modalCaption.innerText = prevImage.alt || 'Image';
      index = prevIndex; // Update index to the previous image
    };

    // Close modal when clicking outside of the image
    const modalElement = document.getElementById('imageModal');
    modalElement.addEventListener('click', function(event) {
      if (event.target === modalElement) {
        modal.hide(); // Hide the modal if the backdrop is clicked
      }
    });
  });
});
