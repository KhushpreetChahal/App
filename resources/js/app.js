import axios from 'axios'


let addToCart = document.querySelectorAll('.add-to-cart')    //addToCart is array type means saare buttons as a array isme a jaye ge
let cartCounter=document.querySelector('#cartCounter')

function updateCart(pizza) {
    axios.post('/update-cart', pizza).then(res => {
        console.log(res)
//  cartCounter.innerText=res.data.totalQty
    })
}

addToCart.forEach((btn) => {              //forEach loop lgyayi he so as to saare btns me event listener lgg jaye
    btn.addEventListener('click', (e) => {
        
        let pizza = JSON.parse(btn.dataset.pizza)  
        updateCart(pizza)
        console.log(pizza )
    })
})            //hrrek iteration me single btn receive ho jaye ga