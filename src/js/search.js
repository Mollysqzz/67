import { getImage } from "./search-api.js";
import SimpleLightbox from 'simplelightbox'; 
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix'


let form = document.querySelector(".search-form")
let input = document.querySelector('#search')
let button = document.querySelector(".icon")
let load_more=document.querySelector(".load-more")
let div = document.querySelector("div")
load_more.classList.add("is-hidden")


let query = ""
let page = 0
let perPage = 40
let totaPage = 1

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    navText: ['&#10094;', '&#10095;'],
});


form.addEventListener('input', onInput)
form.addEventListener("submit", onSubmit)
load_more.addEventListener('click', onClick)
function onInput(event) {
  let userInput = event.target.value.trim()
  console.log(userInput)
}
async function onSubmit(event) { 
  event.preventDefault()
  div.innerHTML = ''
  page = 1
  query = form.elements.searchQuery.value
  try {
    let response = await getImage(page, query)
    totaPage = Math.ceil(response.data.totalHits / perPage)
    renderGallary(response.data.hits)
  load_more.classList.remove('is-hidden')
  } catch (error) {
    
 }
}
async function onClick() {
  page += 1
  if (page == totaPage) {
    load_more.classList.add('is-hidden')
  }
   try {
    let response = await getImage(page, query)
    totaPage = Math.ceil(response.data.totalHits / perPage)
    renderGallary(response.data.hits)
  } catch (error) {
    
 }
 }
function renderGallary(arr) {
  
    let markUp=arr.
      map(
      ({
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
        tags,
      }) =>
        `<div class="photo-card">
        <a href=${largeImageURL}>
        <img src="${webformatURL}" alt="${tags}" loading="lazy" width="300" height="200" />
        </a>
        <div class="info">
          <p class="info-item">
            <b> Likes </b>
            ${likes}
          </p>
          <p class="info-item">
            <b>Views </b>
            ${views}
          </p>
          <p class="info-item">
            <b>Comments </b>
            ${comments}
          </p>
          <p class="info-item">
            <b>Downloads </b>
            ${downloads}
          </p>
        </div>
      </div>`
    )
    .join('');
  console.log(markUp)
    div.insertAdjacentHTML('beforeend', markUp)
    lightbox.refresh()
}

