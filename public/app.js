let closeBtn = document.querySelector('#closeButton');
let shopBtn = document.querySelector('#cart')
let sidebar = document.querySelector('.sidebar')

document.getElementById('updateButton').addEventListener('click', updateEntry)


closeBtn.addEventListener("click", function(){
    console.log("this works")
    sidebar.classList.toggle('showSidebar')
})

shopBtn.addEventListener("click", function(){
    console.log("this works too")
    sidebar.classList.toggle('showSidebar')
})

async function update() {
    try {
        const response = await fetch('updateEntry', {
            method: 'put', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                name: document.getElementsByName('name')[9].value, 
                type: document.getElementsByName('type')[0].value, 
                color: document.getElementsByName('color')[0].value, 
                price: document.getElementsByName('price')[0].value

            })

        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
        
    }
}