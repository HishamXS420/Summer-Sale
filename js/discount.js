function getPurchaseResults() {}

function getApplyButton() {
  const discountedValue = compareCoupon(
    "Total-price",
    "After-coupon",
    "Coupon-code"
  );
  const previousAmount = document.getElementById("After-coupon");
  const previousTotal = document.getElementById("Total-price");

  const previousTotalValue = getTextNumberValueBy("Total-price");
  const discountPrice = document.getElementById("Discount-price");
  const Discount = previousTotalValue - discountedValue;
  const amountDiscounted = Discount.toFixed(2);

  const discountedValueFixed = discountedValue.toFixed(2);

  previousAmount.innerText = discountedValueFixed;

  discountPrice.innerText = amountDiscounted;
}

function getKAC1Price() {
  const discAmount = setPriceAddition("K-accessories-1-amount");
  const productName = getTextStringValueBy("K-accessories-1-name");
  addToProductEntry(productName);
}
function getKAC2Price() {
  const discAmount = setPriceAddition("K-accessories-2-amount");
  console.log(discAmount);
  const productName = getTextStringValueBy("K-accessories-2-name");
  addToProductEntry(productName);
}
function getHomeCookerPrice() {
  const discAmount = setPriceAddition("Home-cooker-amount");
  const productName = getTextStringValueBy("Home-cooker-name");
  addToProductEntry(productName);
  const discountedValue = compareCoupon(discAmount, "Coupon-code");
  const previousAmount = document.getElementById("After-coupon");
  previousAmount.innerText = discountedValue;
}
function getSportsBackCapPrice() {
  const discAmount = setPriceAddition("Sports-back-cap-amount");
  const productName = getTextStringValueBy("Sports-back-cap-name");

  addToProductEntry(productName);
  const discountedValue = compareCoupon(discAmount, "Coupon-code");
  const previousAmount = document.getElementById("After-coupon");
  previousAmount.innerText = discountedValue;
}
function getFullJerseySetPrice() {
  const discAmount = setPriceAddition("Full-jersey-set-amount");
  const productName = getTextStringValueBy("Full-jersey-set-name");
  addToProductEntry(productName);
  const discountedValue = compareCoupon(discAmount, "Coupon-code");
  const previousAmount = document.getElementById("After-coupon");
  previousAmount.innerText = discountedValue;
}
function getSportsCatesPrice() {
  const discAmount = setPriceAddition("Sports-cates-amount");
  const productName = getTextStringValueBy("Sports-cates-name");
  addToProductEntry(productName);
  const discountedValue = compareCoupon(discAmount, "Coupon-code");
  const previousAmount = document.getElementById("After-coupon");
  previousAmount.innerText = discountedValue;
}
function getSingleRelaxChair1Price() {
  const discAmount = setPriceAddition("Single-Relax-chair-amount");
  const productName = getTextStringValueBy("Single-Relax-chair-name");
  addToProductEntry(productName);
  const discountedValue = compareCoupon(discAmount, "Coupon-code");
  const previousAmount = document.getElementById("After-coupon");
  previousAmount.innerText = discountedValue;
}
function getChildrenPlayPrice() {
  const discAmount = setPriceAddition("Children-play-amount");
  const productName = getTextStringValueBy("Children-play-name");
  addToProductEntry(productName);
  const discountedValue = compareCoupon(discAmount, "Coupon-code");
  const previousAmount = document.getElementById("After-coupon");
  previousAmount.innerText = discountedValue;
}
function getFlexibleSofaPrice() {
  const discAmount = setPriceAddition("Flexible-sofa-amount");
  const productName = getTextStringValueBy("Flexible-sofa-name");
  addToProductEntry(productName);
  const discountedValue = compareCoupon(discAmount, "Coupon-code");
  const previousAmount = document.getElementById("After-coupon");
  previousAmount.innerText = discountedValue;
}

function addToProductEntry(ProductType) {
  const productEntry = document.getElementById("Product-entry");

  const count = productEntry.childElementCount;
  const pr = document.createElement("p");
  pr.classList.add("my-2");
  pr.classList.add("font-semibold");

  pr.innerHTML = `${
    count + 1
  }. <span class="ml-3 pt-24 ">${ProductType} <span class="text-2xl text-blue-800"></span>`;
  productEntry.appendChild(pr);
}

document
  .getElementById("Purchase-button")
  .addEventListener("click", function () {
    const initialPrice = document.getElementById("Total-price");
    const initialPriceValue = getTextNumberValueBy('Total-price');
    if(initialPriceValue!=0){
        const discountPrice = document.getElementById("Discount-price");
        const finalPrice = document.getElementById("After-coupon");
        const couponCode = document.getElementById("Coupon-code");
    
        initialPrice.innerText = "0";
        discountPrice.innerText = "0";
        finalPrice.innerText = "0";
        couponCode.value = ""
        const productEntry = document.getElementById("Product-entry");
        productEntry.innerHTML = '';

    }
    else{
        alert('Please select a product before purchasing');
        location.reload();
        location.replace();
        return;
        
    }
   
;
  });
