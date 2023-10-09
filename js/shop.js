//import { products } from "./data";
 var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
//json
//update total when there are no products

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

//VARIABLES
let countProduct = document.querySelector("#count_product");

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  console.log(`buy fired ${id}`);

  let found = false;
  let index = -1;
  let i = 0;
  while (i < products.length && !found) {
    let foundInTheCart = cart.findIndex((product) => product.id === id);
    if (id === products[i].id && foundInTheCart === -1) {
      index = i;
      found = true;
      cart.push(products[index]);
      cartList.push(products[index]);
      cart[cart.length - 1].quantity = 1; //is there a better way?
    } else if (id === products[i].id && foundInTheCart !== -1) {
      index = i;
      found = true;
      cart[foundInTheCart].quantity += 1;
      cartList.push(products[index]);
    }

    i++;
  }
  console.log("the cart")
  console.log(cart);
  console.log("The cartList");
  console.log(cartList);
  countProduct.innerHTML = cartList.length;
  return cart;
}

// Exercise 2
function cleanCart() {
  //why for loop doesn't work here
  console.log(cartList);
 
  let i = 0;
  
  while (cartListEl.firstChild) {
    cartListEl.firstChild.remove();
  }
  totalEl.innerHTML = 0;
  cartList = [];
  cart = [];
  countProduct.innerHTML = cartList.length;

}

// Exercise 3
function calculateTotal(cartList) {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
    console.log(total);
  }
  return total;
}


// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  let subtotalWithDiscount = 0;

  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  //oil promo 
  const oils = cartList.filter((product) => product.name === "cooking oil");
  const groceries = cartList.filter((product) => product.type === "grocery");
  let oilPrice = 0;
  let groceriesPrice = 0;
  let oilsArray = [];
  let pastaArray = [];
  let mixtureArray = [];
  let oilWithDiscount = 0;
  let pastaWithDiscount = 0;

  let mixtureWithDiscount = 0;

  if (oils.length >= 3 && groceries.length < 10) {
    let oilNumber = oils.length;
    for (let i = 0; i < oilNumber; i++) {
      oilPrice += oils[i].price;
    }

    const sumDiscount = (oilPrice / 100) * 20;
    subtotalWithDiscount = total - sumDiscount;
    total = subtotalWithDiscount;
  }
  //groceries promo
  else if (groceries.length >= 10) {
    for (let i = 0; i < groceries.length; i++) {
      if (groceries[i].name === "cooking oil") {
        oilsArray.push(groceries[i]);
        oilWithDiscount += groceries[i].price - (groceries[i].price / 100) * 30;
      }

      if (groceries[i].name === "Pasta") {
        pastaArray.push(groceries[i]);
        pastaWithDiscount +=
          groceries[i].price - (groceries[i].price / 100) * 30;
      }

      if (groceries[i].name === "Instant cupcake mixture") {
        mixtureArray.push(groceries[i]);
        mixtureWithDiscount +=
          groceries[i].price - (groceries[i].price / 100) * 30;
      }


      groceriesPrice += groceries[i].price;
    }
    const sumDiscount2 = (groceriesPrice / 100) * 30;
    subtotalWithDiscount = total - sumDiscount2;
    total = subtotalWithDiscount;
  }
  console.log(total, subtotalWithDiscount);
  return total;
}


// Exercise 5

const cartListEl = document.querySelector("#cart_list");
const totalEl = document.querySelector("#total_price");
let newProduct,
  productName,
  productNum,
  productPrice,
  productPriceCounted,
  productTotalPrice;


function printCart(cart) {
  applyPromotionsCart();
  
  console.log(total);
  if (cart.length !== 0) {
    for (let i = 0; i < cart.length; i++) {
      newProduct = document.createElement("tr");
      newProduct.setAttribute("id", cart[i].id);
      productName = document.createElement("th");
      productName.innerHTML = cart[i].name;
      productPrice = document.createElement("td");
      productPrice.innerHTML = `$ ${cart[i].price}`;
      productNum = document.createElement("td");
      productNum.innerHTML = cart[i].quantity;
      productTotalPrice = document.createElement("td");
      productPriceCounted = 0;
      function count1() {
        groceries = cartList.filter((product) => product.type === "grocery");
        oils = cartList.filter((product) => product.name === "cooking oil");


        if (cart[i].type === "grocery" && groceries.length >= 10) {
          productPriceCounted =
            cart[i].price * cart[i].quantity -
            ((cart[i].price * cart[i].quantity) / 100) * 30;
        } else if ((cart[i].name === "cooking oil" && oils.length >=3)) {
          productPriceCounted = cart[i].price * cart[i].quantity - (
            (cart[i].price * cart[i].quantity) / 100) * 20;
          
        }        
        else {
          productPriceCounted = cart[i].price * cart[i].quantity;
        }
        return productPriceCounted.toFixed(2);
      }
      productTotalPrice.innerHTML = count1();

      //remove button
      const btnRemove = document.createElement("button");
      btnRemove.classList.add("removeBtn"); //?
      btnRemove.classList.add("btnRem");
      btnRemove.innerHTML = "Remove";
      btnRemove.addEventListener("click", () => removeFromCart(cart[i].id));
      
      totalEl.innerHTML = total.toFixed(2);

      newProduct.append(productName);
      newProduct.append(productPrice);
      newProduct.append(productNum);
      newProduct.append(productTotalPrice);
      newProduct.append(btnRemove);

      cartListEl.append(newProduct);
    }
  }
}

// ** Nivell II **

// Exercise 7

function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
 
  const productRemove = cart.find(x => x.id === id);
  const cartListIndexRemove = cartList.findIndex(x => x.id === id);
  cartList.splice(cartListIndexRemove, 1);
  productRemove.quantity = productRemove.quantity - 1;
  cart = cart.filter((productToRemove) => productToRemove.quantity !== 0);

  cartListEl.innerHTML = "";
  total = 0;
  totalEl.innerHTML = total.toFixed(2);

  console.log(cart);
  
  printCart(cart);
  
  countProduct.innerHTML = cartList.length;


}

function open_modal(e) {
  cartListEl.innerHTML = "";
  printCart(cart);
}
/* TO REMOVE 
const openModalButton = document.getElementById("openModalButton");

openModalButton.addEventListener("click", function (event) {
  //event.stopPropagation(); // Prevent event propagation
  open_modal(event); // Call open_modal function
});
*/