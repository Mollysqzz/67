import axios from 'axios'

let button = document.querySelector(".btn")
let ul = document.querySelector('.user-list')

let page = 1
let perPage = 3


button.addEventListener("click", async () => {
    try {
        let posts =await fetchUser()
        console.log(posts)
        renderUser(posts)
        page += 1
        if (page > 1) {
            button.textContent='get more user'
        }
    }
    catch (error) {
        console.log(error)
    }
})

async function fetchUser() {
    let params = new URLSearchParams({
    _limit: perPage,
    _sort: "name",
    _page:page
})
let url=`https://jsonplaceholder.typicode.com/users?${params}`
let responce= await axios.get(url)
  
 
  return responce.data
}


function renderUser(user) {
    console.log(user)
    let markUp = user.map(person => {
        return `<li>
    <p>
    Name: ${person.name}</p>
    <p>
    Email:${person.email}</p></li>`
    }).join("")
    ul.insertAdjacentHTML('beforeend',markUp)
}



