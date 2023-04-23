// this is to fetch the fake data

const searchInput = document.getElementById("search")

let users = []

searchInput.addEventListener("input", e=>{
    const value = e.target.value.toLowerCase()
    users.forEach(user =>{
        const isVisible = user.name.toLowerCase().includes(value) || user.email.includes(value)
        user.element.classList.toggle("hide",!isVisible)
    })

})


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users =  data.map(user => {
            const card = document.createElement("div")
            card.setAttribute("class","card")
            const header = document.createElement("div")
            header.setAttribute("class", "header");
            const body = document.createElement("div")
            body.setAttribute("class", "body");
            header.textContent = user.name
            body.textContent = user.email
            card.appendChild(header)
            card.appendChild(body)
            const elem = document.getElementById("user-cards");
            elem.append(card)
            return {name: user.name, email:user.email,element: card}            
        })
    })
