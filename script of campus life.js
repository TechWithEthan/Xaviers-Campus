function checkImage(imageId, label) {
    const imageElement = document.getElementById(imageId);
    const imageSource = imageElement.src;
    
    if (imageSource.includes('xavierscampus3.jpg')) {
        alert('This image of ' + label + ' is repeated!');
        imageElement.classList.add('highlight-different');
    } else {
        alert('This image of ' + label + ' is unique.');
        imageElement.classList.remove('highlight-different');
    }
}
