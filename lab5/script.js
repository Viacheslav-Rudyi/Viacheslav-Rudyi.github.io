document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault()
    location.reload()
})
document.getElementById("catalog").addEventListener("click", (e) => {
    e.preventDefault()
    loadCatalog()
})
const menu = document.getElementById("menu")
const container = document.getElementById("container")
const infoblock = document.getElementById("info")

async function loadCatalog() {
    if (menu.childElementCount == 0) {
        try {
            let res = await fetch("catalog.json")
            if (!res.ok) throw new Error("Error loading content")
            let cat = res.json()
            cat.then(function(result) {
                console.log(result)
                let categories = []
                for (let i in result) {
                    let element = document.createElement("button")
                    element.addEventListener("click", onButtonClickFactory(result[i].link))
                    menu.appendChild(element)
                    element.textContent = result[i].name
                    
                    categories.push(result[i].link)
                }
                
                let special = document.createElement("button")
                menu.appendChild(special)
                special.textContent = "Special"
                special.addEventListener("click", (e) => {
                    let max = categories.length
                    let index = Math.floor(Math.random() * (max))
                    onButtonClickFactory(categories[index])()
                })
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    else {
        menu.innerHTML = ""
    }
}

function onButtonClickFactory(name) {
    return async function(event) {
        container.innerHTML = ""
        infoblock.innerHTML = ""
        let res = await fetch(name)
        res.json().then((item) => {
            console.log(item)
            let catName = document.createElement("h2")
            let catNotes = document.createElement("p")
            catName.textContent = item.name
            catNotes.textContent = item.notes
            infoblock.appendChild(catName)
            infoblock.appendChild(catNotes)

            for (let i of item.products) {
                let block = document.createElement("div")
                let img = document.createElement("img")
                let n = document.createElement("h3")
                let desc = document.createElement("p")
                let price = document.createElement("h3")

                img.src = i.image
                n.textContent = i.name
                desc.textContent = i.description
                price.textContent = i.price

                img.style.width = "200px"

                block.appendChild(img)
                block.appendChild(n)
                block.appendChild(desc)
                block.appendChild(price)

                container.appendChild(block)
            }
        })
    }
}