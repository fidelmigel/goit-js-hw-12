import { fetchImages } from './js/pixabay-api.js';
import { renderImages, initializeLightbox } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refsEl = {
  searchForm: document.querySelector('.search-form'),
  inputForm: document.querySelector('.form-input'),
  searchBtn: document.querySelector('.form-button'),
  gallery: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const { searchForm, inputForm, searchBtn, gallery, loaderEl, loadMoreBtn } =
  refsEl;

let query = '';
let page = 1;
const perPage = 15;
let totalHits = 0;

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

async function onSearchFormSubmit(event) {
  event.preventDefault();
  query = event.target.elements.search.value.trim();
  if (query === '') {
    gallery.innerHTML = '';
    event.target.reset();
    iziToast.show({
      message: 'Input field cannot be empty',
      position: 'topRight',
      timeout: 2000,
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      messageLineHeight: '1.5',
      class: 'error',
    });
    return;
  }

  gallery.innerHTML = '';
  page = 1;
  loadMoreBtn.classList.add('is-hidden');
  loaderEl.classList.remove('is-hidden');

  try {
    const imagesData = await fetchImages(query, page, perPage);
    totalHits = imagesData.totalHits;
    const totalPages = Math.ceil(totalHits / perPage);

    if (totalHits === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        messageLineHeight: '1.5',
        class: 'error',
      });
      return;
    }
    gallery.innerHTML = renderImages(imagesData.hits);
    initializeLightbox();
    event.target.reset();

    if (page < totalPages) {
      loadMoreBtn.classList.remove('is-hidden');
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        timeout: 2000,
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        messageLineHeight: '1.5',
        class: 'info',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.show({
      message: 'An error occurred while fetching images. Please try again.',
      position: 'topRight',
      timeout: 2000,
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      messageLineHeight: '1.5',
      class: 'error',
    });
  } finally {
    loaderEl.classList.add('is-hidden');
  }
}

async function onLoadMoreClick() {
  page += 1;
  loaderEl.classList.remove('is-hidden');

  try {
    const imagesData = await fetchImages(query, page, perPage);

    gallery.insertAdjacentHTML('beforeend', renderImages(imagesData.hits));
    initializeLightbox();
    smoothScroll();

    if (gallery.children.length >= totalHits) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        timeout: 2000,
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        messageLineHeight: '1.5',
        class: 'info',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.show({
      message: 'An error occurred while fetching images. Please try again.',
      position: 'topRight',
      timeout: 5000,
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      messageLineHeight: '1.5',
      class: 'error',
    });
  } finally {
    loaderEl.classList.add('is-hidden');
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
