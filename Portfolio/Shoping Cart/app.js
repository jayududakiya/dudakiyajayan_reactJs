const Shop_list = document.getElementById("Shop-list");
const Cart_list = document.getElementById("Cart-list");

const count_carts = document.querySelector(".count-carts");

const Cart_list_Warp = document.getElementById("Cart-list-Warp");

let DATA = [];
let CART = [];
let SHOW_CART = [];

// [...object , cart.object]

const show_cart_box = () => {
  Cart_list_Warp.classList.toggle("active");
  // Show_Cart_item();
};

const show_Count = () => {
  count_carts.innerHTML = CART.length;
};

const ADD_TO_CART = (id) => {
  let Product_ID = id;

  let search_CART = DATA.find((data) => data.id == Product_ID.id);
  
  let find_CART = CART.find((D_Cart) => D_Cart.id == Product_ID.id);
  

  if (CART.length <= 0) {
    CART = [
      {
        id: Product_ID.id,
        Qut: 1,
      },
    ];
    //
    // SHOW_CART.push(search_CART);
    // SHOW_CART.push(search_CART[0]);
    // SHOW_CART = search_CART
  } else if (find_CART !== undefined) {
    find_CART.Qut = find_CART.Qut + 1;
  } else {
    CART.push({
      id: Product_ID.id,
      Qut: 1,
    });
    //
    // SHOW_CART = search_CART
    // SHOW_CART.concat(search_CART)
    // SHOW_CART.push(search_CART);
  }

  // console.log("search", search_CART);
  // console.log("SHOW_CART", SHOW_CART);
  console.log("CART", CART);
  show_Count();
  Show_Cart_item();
};

// const REMOVE_TO_CART = () => {};

const Show_Cart_item = () => {
  // Cart_list.innerHTML = ""
  // console.log(SHOW_CART);

  SHOW_CART.forEach((data) => {
    let { name, id, thumbnail_1, price, color } = data;
    let newItem = document.createElement("div");
    newItem.classList.add("cart-item");
    newItem.id = id;
    newItem.innerHTML = `
        <div class="Ct-item-img">
                    <img src=${thumbnail_1} class="item-img" alt="">
                </div>
                <div class="Ct-item-body">
                    <h3 class="cart-name">${name}</h3>
                    <p>
                        <small>ID : ${id}</small>
                        <span>&#8226;</span>
                        <small>${color}</small>
                    </p>
                    <h5 class="cart-price">${price}</h5>
                </div>
                <button  class="REMOVE_btn" >
                    <i class="bi bi-x-circle"></i>
                    <span class="count-carts">0</span>
                </button>`;
    Cart_list.appendChild(newItem);
  });
};

const Show_Shop_item = () => {
  DATA.forEach((Data) => {
    let { name, desc, color, price, thumbnail_1, id } = Data;
    let newItem = document.createElement("div");
    newItem.classList.add("shop-item");
    newItem.id = `I_${id}`;
    newItem.innerHTML = `
        <div class="Sp-item-img">
            <img src=${thumbnail_1} class="item-img" alt="">
        </div>
        <div class="Sp-item-body">
                <h4 class="Product-name">${name}</h4>
                <p>
                <small>Id : ${id}</small>
                <small>${color}</small>
                </p>
                <p class="Product-desc">
                    ${desc}
                </p>
            <div class="price_cart" >
                <h3 class="Product-price">${price}</h3>
                <button class="ADD_btn " onclick="ADD_TO_CART(${id})" id="${id}">
                <i class="bi bi-archive"></i>
                </button>
            </div>
        </div>`;
    Shop_list.appendChild(newItem);
  });
};

const GET_DATA = async () => {
  await fetch("/Data/MOCK_SHOE_DATA.json")
    .then((Response) => Response.json())
    .then((data) => {
      DATA = data;
      Show_Shop_item();
    })
    .catch(() => {
      Error = new Error("Data Was Not Show");
      return alert("Fetch URL is Not Working");
    });
};

GET_DATA();
