function myFunction(x) {
  x.classList.toggle("change");
  var y = document.getElementById("myLinks");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
};

let showGallery = document.getElementById('showBtn');
let gallery = document.getElementById('gallery-container');

showGallery.onclick = () => {
    gallery.style.display = 'block';
};

let showContact = document.getElementById('showBtn-2');
let contact = document.getElementById('contact-container');

showContact.onclick = () => {
    contact.style.display = 'block';
};

let closeContents = document.getElementById('showBtn-3');
let galleryClose = document.getElementById('gallery-container');
let contactClose = document.getElementById('contact-container');

    closeContents.onclick = () => {
    galleryClose.style.display = 'none';
    contactClose.style.display = 'none';
};
