var products = [
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
    price:3000, 
    image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    },
    {about:"Couple Shoes 2021 New One Man and One Woman Spring Korean",
        price:3000, 
        image:"./img/Rectangle 2.png",
    }
]
var cartContainer = document.getElementsByClassName('cart-container')[0];

for(i=0;i<products.length;i++){
    let product = products[i];
    var cartTag = document.createElement('div');
    cartTag.classList.add('cart');
    let cartContentTag = `<img src="${product.image}" alt="" class="cart-photo">
    <p class="about-cart">${product.about}</p>
    <div class="cart-price">${"Ks" +" "+product.price}</div>`
    cartTag.innerHTML = cartContentTag;
    cartContainer.append(cartTag);
}
const cartItemsTag = document.getElementsByClassName('cart');
// add cart
for(var i = 0;i<cartItemsTag.length;i++){
    var addCartButton = cartItemsTag[i];
    addCartButton.addEventListener('click',addCartClicked);
}
// remove cart
const removeTag = document.getElementsByClassName('remove-cart')
for(i=0;i<removeTag.length;i++){
    button = removeTag[i];
    button.addEventListener('click',removeCartItem)
    
}

function addCartClicked (event){
    var addCartButton = event.target;
    var parentTag = addCartButton.parentElement
    var about = parentTag.getElementsByClassName('about-cart')[0].innerText;
    
    var price = parentTag.getElementsByClassName('cart-price')[0].innerText;
    var productImg = parentTag.getElementsByClassName('cart-photo')[0].src;
    addProductToCart(about,price,productImg);
    updateTotal();
}

function removeCartItem (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal()
}
function addProductToCart(about,price,productImg){
    var cartBox = document.createElement('div');
    cartBox.classList.add('order-cart');
    // var Cart = document.getElementsByClassName('cart');
    var cartBoxContent =`<img src="${productImg}" alt="" class="order-photo">
    <div class="detail">
        <p class="about-order">${about}</p>
        <div class="price">${price}</div>
        <div class="count">
            <span class="minus">-</span>
            <span class="quantity">1</span>
            <span class="plus">+</span>
        </div>
                        
    </div>
    <div >
        <img src="./img/Icon4.png" alt="" class="remove-cart">
    </div>`
    cartBox.innerHTML = cartBoxContent;
    const parent = document.getElementsByClassName('order-parent')[0];
    parent.append(cartBox);
    cartBox.getElementsByClassName('remove-cart')[0]
    .addEventListener('click',removeCartItem);
    const orderCart = document.getElementsByClassName('order')[0];
    if(cartBox.length = 0){
        orderCart.style.display = 'none';
    }else{
        orderCart.style.display = 'flex';
    }
    // quantity change
    let n =1;
    var countTag =cartBox.getElementsByClassName('count');
    for(var i = 0;i<countTag.length;i++){
        var count = countTag[i];
        var minus =count.children[0];
             minus.addEventListener('click',(event)=>{
            var decreasement = event.target;
             n-=1;
            if(n<=0){
                n=1;
                return;
            }
            decreasement.parentElement.children[1].innerHTML =n;
            updateTotal();
        })
        var plus =count.children[2];
        plus.addEventListener('click',(event)=>{
            var increasement = event.target;
            n+=1;
            increasement.parentElement.children[1].innerHTML =n;
            updateTotal();
        });
    };
        
}
function updateTotal (){
    var orderParent = document.getElementsByClassName('order-parent')[0];
    var orderCarts = orderParent.getElementsByClassName('order-cart');
    var total = 0;
    for(i=0;i<orderCarts.length;i++){
        var orderCart = orderCarts[i];
        var priceElement = orderCart.getElementsByClassName('price')[0];
        var quantityElement = orderCart.getElementsByClassName('quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("Ks",""));
        
        var quantity = quantityElement.innerHTML;
        total +=price * quantity;
    }
    total=Math.round(total * 100)/100;
    document.getElementsByClassName('price-total')[0].innerText ="Ks"+" " + total;
    taxiPrice = Math.round(total*5)/100;
    document.getElementsByClassName('taxi-price')[0].innerText ="Ks"+" " + taxiPrice;
    allPrice = total + taxiPrice;
     document.getElementsByClassName('all-price')[0].innerText ="Ks"+" " + allPrice;

}