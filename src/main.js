import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.search-form');


form.addEventListener('submit', searchImage);
function searchImage(evt) {
    evt.preventDefault();
    const image = evt.target.elements.image.value;
    if (image === '') {
        return;
    } else {
        getImage(image).then(data => {
            if (data.totalHits > 0) {
                console.log(data);
            } else {
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

function imageTemplate () {
    return ` <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title="" /></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image" /></a>`;
}

// function renderImages{}

