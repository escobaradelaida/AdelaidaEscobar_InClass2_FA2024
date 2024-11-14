// showing the image on click
function showImage(buttonId) {
  const imageBox = document.getElementById(`image${buttonId}`);
  //imageBox.style.display = "block";
  imageBox.querySelector('img').style.display = 'block'; // show the image
  imageBox.querySelector('.hide-button').style.display = 'inline-block';
}

// hiding the image on click
function hideImage(buttonId) {
  const imageBox = document.getElementById(`image${buttonId}`);
  imageBox.querySelector('img').style.display = 'none'; // hide the imaage
  imageBox.querySelector('.hide-button').style.display = 'none';
}