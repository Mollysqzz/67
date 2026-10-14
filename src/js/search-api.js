import axios from 'axios'
const BASE_URL = 'https://pixabay.com/api/';
async function getImage(page, query) {
    let params = new URLSearchParams({
        key: "57818136-1468a63ed1a2da3a6e4b51ef9",
        page,
        per_page: 40,
        q: query,
        image_photo: "photo",
        orientation: "horizontal",
        safesearch:true
    })
    let response = await axios.get(`${BASE_URL}?${params}`)
    return response
}
export {getImage}