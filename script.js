var menuitems = document.getElementById("menuitems"); //variable for menu icon
var myrow = document.getElementById("myrow"); //variable for making user friendly with navbar

// variable for login and signup page
var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");
const first = document.getElementById("first");
const sec = document.getElementById("sec");
const third = document.getElementById("third");
const total = document.getElementById("total");
const subtotal = document.getElementById("subtotal");
const one = document.getElementById("one");
const one_row = document.getElementById("one_row");
const two = document.getElementById("two");
const two_row = document.getElementById("two_row");
const three = document.getElementById("three");
const three_row = document.getElementById("three_row");
const select_option = document.getElementById("select-option");
const addCart = document.getElementById("addCart");

if (addCart) {
  addCart.addEventListener("click", () => {
    if (select_option.value == "Select Size")
      alert("please select your size first");
    else {
      window.location.href = "cart.html";
      console.log("else part hit");
    }

    console.log(select_option.value);
  });
}

if (one) {
  one.addEventListener("click", () => {
    one_row.classList.add("hide");
  });
}
if (two) {
  two.addEventListener("click", () => {
    two_row.classList.add("hide");
  });
}
if (three) {
  three.addEventListener("click", () => {
    three_row.classList.add("hide");
  });
}

if (total) {
  total.addEventListener("click", () => {
    let a = first.value;
    if (one_row.classList.contains("hide")) a = 0;
    let b = sec.value;
    if (two_row.classList.contains("hide")) b = 0;

    let c = third.value;
    if (three_row.classList.contains("hide")) c = 0;
    let total__ = a * 550 + b * 600 + c * 850;
    console.log(total__);
    let sub_tot = total__ + Number(150);
    subtotal.innerHTML = ` <table>
                <tr>
                    <td>Subtotal</td>
                    <td>${total__} Rs</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>150.00 Rs</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>${sub_tot} Rs</td>
                </tr>
            </table>
            <button style="
    padding: 10px 28px;
    color: white;
    background-color: rgb(83, 81, 81);
    border-radius:10px;
    cursor: pointer;
 "  onclick="window.location.href='payment.html'"> Proceed to pay</button>`;
  });
}
menuitems.style.maxHeight = "0px";

function menutoggle() {
  if (menuitems.style.maxHeight == "0px") {
    menuitems.style.maxHeight = "200px";
    myrow.style.marginTop = "170px"; //  -----for not collapsing after navbarscroll----
  } else {
    menuitems.style.maxHeight = "0px";
    myrow.style.marginTop = "0px";
  }
}

// ------js for product gallery------

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};

// -------js for togge form ---------

function register() {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}
