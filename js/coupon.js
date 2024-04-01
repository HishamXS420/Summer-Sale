function compareCoupon( elementId1,elementId2, stringId) {
  const inputString = document.getElementById(stringId);
  const inputStringText = inputString.value;
  const inputAmount = getTextNumberValueBy(elementId1);

  if (inputStringText == "SELL200" && inputAmount>="200") {
  
    const finalAmount = getTextNumberValueBy(elementId2);
    const finalDiscountedAmount = inputAmount - (inputAmount / 100) * 20;

    return finalDiscountedAmount;
  } else {
    const inputAmount = getTextNumberValueBy(elementId1);

    return inputAmount;
  }
}

function getCouponButton() {
  const couponButton = getTextStringValueBy("Coupon-button");
  const textFieldSet = document.getElementById("Coupon-code");
  textFieldSet.value = couponButton;
}
