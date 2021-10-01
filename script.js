document.getElementById('eightGb-memory').addEventListener('click',
function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 0; 
    //const totalPrice  = updatePrice();
});
// 16GB extra memory 
document.getElementById('sixteenGb-memory').addEventListener('click',
function () {
    //const ExtraMemory = 180;
    //const extraMemoryCost = document.getElementById('extra-memory-cost');
    //let newMemoryCost = extraMemoryCost.innerText = ExtraMemory; 
    //const totalPrice  = updatePrice();
});
//default storage price
document.getElementById('twoFiftysixGb').addEventListener('click',
function () {
    //const extraStorageCost = document.getElementById('extra-storage-cost');
    //extraStorageCost.innerText = 0;
    //const totalPrice  = updatePrice();
});
// 512GB storage memory
document.getElementById('fiveTwelveGb').addEventListener('click',
function () {
    //const fiveTweleveGb = 100;
    //const extrafiveTweleveGbCost = document.getElementById('extra-storage-cost');
    //let newStorageCost = extrafiveTweleveGbCost.innerText = fiveTweleveGb; 
    //const totalPrice  = updatePrice();
});
// 1TB storage 
document.getElementById('oneTb').addEventListener('click',
function () {
    //const storage1TB  = 180;
    //const extra1TBCost = document.getElementById('extra-storage-cost');
    //let newMemoryCost = extra1TBCost.innerText = storage1TB; 
    //const totalPrice  = updatePrice();
});
//default delivery
document.getElementById('twentyFiveDelivery').addEventListener('click',
function () {
    //const deliveryCost = document.getElementById('delivery-charge');
    //deliveryCost.innerText = 0;
    //const totalPrice  = updatePrice();
});
// fast delivery 
document.getElementById('twentyOneDelivery').addEventListener('click',
function () {
    //const fastDelivery = 20;
    //const deliveryCost = document.getElementById('delivery-charge');
    //let newDeliveryCost = deliveryCost.innerText = fastDelivery;
    //const totalPrice  = updatePrice();
});
 
function updatePrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-charge').innerText; 
    const newBestPrice = parseInt(bestPrice);
    const newExtraMemoryCost = parseInt(extraMemoryCost);
    const newExtraStorageCost = parseInt(extraStorageCost);
    const newDeliveryCost = parseInt(deliveryCost);
    const addedNumbers = newBestPrice + newExtraMemoryCost + newExtraStorageCost + newDeliveryCost ;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = addedNumbers;
    const promoTotal = document.getElementById('promo');
    promoTotal.innerText = addedNumbers;
};
//promo code
document.getElementById('button').addEventListener('click',
function () {
    const totalPrice = document.getElementById('total-price');
    const beforePromoCode = parseInt(totalPrice.innerText);
    const PromoCode = beforePromoCode-(beforePromoCode * 0.2);
    const total = document.getElementById('promo');
    const inputField = document.getElementById('input-field');
    if (inputField.value == 'stevekaku') {
        total.innerText = PromoCode;
        inputField.value =''
    }
    else {
        total.innerText = beforePromoCode;
    }
})