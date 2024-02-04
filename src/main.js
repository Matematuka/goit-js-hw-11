import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.search-form');
const searchBtn = document.querySelector('button');
const pictures = document.querySelector('.gallery');

form.addEventListener('submit', searchImage);
function searchImage(evt) {
    evt.preventDefault();
    const image = evt.target.elements.image.value;
    if (image === '') {
        return;
    } else {
        getImage(image).then(data => {
            if (data.totalHits > 0) {
    const markup = data.hits.map(imageTemplate).join('\n\n');
                pictures.innerHTML = markup;
                
            } else {
        pictures.innerHTML = "";
        iziToast.show({
    title: 'Error',
    message: 'There are no images matching your search query. Please try again!',   
    titleSize: '16px',
    titleLineHeight: '150%',
    messageSize: '16px',
    messageLineHeight: '150%',
    backgroundColor: '#ef4040',
    position: 'bottomRight'
        });              
            }       
        });     
}
    evt.target.reset();   
}

function getImage(imageName) {
    const BASE_URL = 'https://pixabay.com/api';
    const PARAMS = `?key=42174217-6daf07c41ac875e98ae2151fa&q=${imageName}&image_type=photo$orientation=horizontal&safesearch=true`;
    const url = BASE_URL + PARAMS;
    return fetch(url).then(res => res.json());
}

function imageTemplate ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `<li class="gallery-item"><a href="${webformatURL}"><img class="gallery-image" src="${largeImageURL}" data-source = ${largeImageURL} alt="${tags}" /></a>
<div class="description"> <p>Likes <span>${likes}</span></p><p>Views <span>${views}</span></p><p>Comments <span>${comments}</span></p><p>Downloads <span>${downloads}</span></p></div></li>`;
}

function renderImages(hits) {
const pictures = document.querySelector('.gallery');
const markup = hits.map(imageTemplate).join('\n\n');
pictures.innerHTML = markup;
}

const gallery = new SimpleLightbox('.gallery-item a');
gallery.on('show.simplelightbox',  {
	nav: 'true',
});