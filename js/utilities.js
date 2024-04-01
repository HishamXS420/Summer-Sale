function getTextStringValueBy(textId) {
  const textField = document.getElementById(textId);
  const textFieldString = textField.innerText;


  return textFieldString;
}
function getTextNumberValueBy(textId) {
  const textField = document.getElementById(textId);
  const textFieldString = textField.innerText;
  const textFieldValue = parseFloat(textFieldString);


  return textFieldValue;
}

function getInputValueBy(inputId){
    const inputField = document.getElementById(inputId);
      const inputFieldString = inputField.value;
      const inputFieldValue = parseFloat(inputFieldString);

    return inputFieldValue;
}

function getCouponValueBy(CouponId) {
    const CouponField = document.getElementById(CouponId);
    const CouponFieldValue = CouponField.innerText;
 
  
    return CouponFieldValue;
  }

  function setPriceAddition(productId){
    const price1Value = getTextNumberValueBy('Total-price');
const price2Value = getTextNumberValueBy('After-coupon');
 const price = getTextNumberValueBy(productId);
    const price1 = document.getElementById('Total-price');
    const price2 = document.getElementById('After-coupon');
   price1.innerText = price1Value + price;
    price2.innerText = price2Value + price;
    const discPrice = price1.innerText;
    return  discPrice;
  }

