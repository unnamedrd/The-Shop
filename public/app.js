let closeBtn = document.querySelector('#closeButton');
let shopBtn = document.querySelector('#cart')
let sidebar = document.querySelector('.sidebar')
let addCartItem = document.querySelectorAll(".addToCart");

document.getElementById('updateButton').addEventListener('click', updateEntry)




closeBtn.addEventListener("click", function(){
    console.log("this works")
    sidebar.classList.toggle('showSidebar')
})

shopBtn.addEventListener("click", function(){
    console.log("this works too")
    sidebar.classList.toggle('showSidebar')
})

for (let i = 0; i < addCartItem.length; i++){
addCartItem[i].addEventListener("click", addCart);
}


async function addCart() {

    console.log("the add to card is working")
    try {
        const response = await fetch("addCart", {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: document.getElementById("itemName")[0].value,
            type: document.getElementById("itemType")[0].value,
            color: document.getElementById("itemColor")[0].value,
            price: document.getElementById("itemPrice")[0].value
          }),
        });
        const data = await response.json()
        location.reload()
    } catch (err) {
        console.log(err)
    }
}
async function updateEntry() {
    try {
        const response = await fetch('updateEntry', {
            method: 'put', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                name: document.getElementsByName('name')[0].value, 
                type: document.getElementsByName('type')[0].value, 
                color: document.getElementsByName('color')[0].value, 
                price: document.getElementsByName('price')[0].value

            })

        })
        const data = await response.json()
        location.reload()
    } catch (err) {
        console.log(err)
        
    }
}

async function deleteEntry() {
    const input = document.getElementById('deleteInput')
    try {
        const response = await fetch('deleteEntry', {
            method: 'delete',
            headers:{'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                name:input.value
            })
        })
        const data = await response.json()
        location.reload()
    } catch (err) {
        console.log(err)
    }
}