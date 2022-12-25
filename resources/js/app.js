let addToCart = document.querySelectorAll('.add-to-cart')    //addToCart is array type means saare buttons as a array isme a jaye ge


function updateCart(pizza) {
    
}

addToCart.forEach((btn) => {              //forEach loop lgyayi he so as to saare btns me event listener lgg jaye
    btn.addEventListener('click', (e) => {
        
        let pizza = JSON.parse(btn.dataset.pizza)  
        updateCart(pizza)
        console.log(pizza )
    })
})            //hrrek iteration me single btn receive ho jaye ga