import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

import { fetchImages } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";


const refs = {
    userRequest: document.querySelector('.form__input'),
    form: document.querySelector('.form'),
    resultsList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader')
}


function submitHandler(event) {
    event.preventDefault();
    
    if (!refs.userRequest.value.trim()) {
        return iziToast.warning({
            message: "That field can't be empty!",
            position: "topRight",
            backgroundColor: 'red',
        })
    }

    refs.resultsList.innerHTML = '';
    refs.loader.classList.toggle('is-hidden');
    

    fetchImages(refs.userRequest.value.trim())
        .then(data => {
            event.target.reset();
            if (data.hits.length === 0) {
                iziToast.info({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight',
                })
            };

            refs.resultsList.insertAdjacentHTML("beforeend", createMarkup(data.hits));

            lightbox.refresh();
        })
        .catch(Error => console.log(Error))
        .finally(() => {
            refs.loader.classList.toggle('is-hidden');
        })
}

refs.form.addEventListener('submit', submitHandler);
