document.addEventListener('DOMContentLoaded', () => {
    // Fade in gallery title
    const title = document.getElementById('gallery-title');
    title.style.transition = 'opacity 1.5s ease-in-out';
    title.style.opacity = 1;

    // Array of media for the gallery
const mediaItems = [
    { src: 'Image/XavierCampus.png', alt: 'Campus View 1', type: 'image' },
    { src: 'Image/classroom2.png', alt: 'Campus View 2', type: 'image' },
    { src: 'Image/xavierscampus3.jpg', alt: 'Campus View 3', type: 'image' },
    { src: 'Image/xavierscampus4.jpg', alt: 'Campus View 4', type: 'image' },
    { src: 'Image/xavierscampus5.png', alt: 'Campus View 5', type: 'image' },
    { src: 'Image/xavierscampus6.png', alt: 'Campus View 6', type: 'image' },
    { src: 'Image/xavierscampus7.png', alt: 'Campus View 7', type: 'image' },
    { 
        src: "Image/Christmas party.mp4", 
        alt: "Campus Christmas Party and Carols", 
        type: "video" 
    }
    
  ];
  
  // Example rendering logic for images and videos
  mediaItems.forEach((item) => {
    if (item.type === 'image') {
      // Code to render image
    } else if (item.type === 'video') {
      // Code to render video
    }
  });
  

    // Generate gallery items dynamically
    const galleryRow = document.getElementById('gallery-row');
    images.forEach(img => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      
      const imageElement = document.createElement('img');
      imageElement.src = img.src;
      imageElement.alt = img.alt;

      galleryItem.appendChild(imageElement);
      galleryRow.appendChild(galleryItem);

      // Add hover effects
      galleryItem.addEventListener('mouseenter', () => {
        galleryItem.style.transition = 'transform 0.5s ease';
        galleryItem.style.transform = 'scale(1.05) rotate(2deg)';
        galleryItem.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        imageElement.style.transform = 'scale(1.1)';
      });

      galleryItem.addEventListener('mouseleave', () => {
        galleryItem.style.transform = 'scale(1) rotate(0deg)';
        galleryItem.style.boxShadow = 'none';
        imageElement.style.transform = 'scale(1)';
      });
    });
  });