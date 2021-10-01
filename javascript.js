//default memory price
document.getElementById('memory-default').addEventListener('click',
function () {
    // extra memory price reduce 
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 0;
    // update total price 
    const updateTotalPrice  = updateTotal();
});
// 16GB extra 
document.getElementById('extra-memory').addEventListener('click',
function () {
    const ExtraMemory = 180;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    let newMemoryCost = extraMemoryCost.innerText = ExtraMemory;
    // update total price 
    const updateTotalPrice  = updateTotal();
});
/* ------------------------------------------------------------------------- */
//default storage price
document.getElementById('storage-default').addEventListener('click',
function () {
    // extra memory price reduce 
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 0;
    // update total price 
    const updateTotalPrice  = updateTotal();
});
// 512GB storage 
document.getElementById('storage-512GB').addEventListener('click',
function () {
    const storage512GB = 100;
    const extra512GBCost = document.getElementById('extra-storage-cost');
    let newStorageCost = extra512GBCost.innerText = storage512GB;
    // update total price 
    const updateTotalPrice  = updateTotal();
});
// 1TB storage 
document.getElementById('storage-1TB').addEventListener('click',
function () {
    const storage1TB  = 180;
    const extra1TBCost = document.getElementById('extra-storage-cost');
    let newMemoryCost = extra1TBCost.innerText = storage1TB;
    // update total price 
    const updateTotalPrice  = updateTotal();
});
/* ------------------------------------------------------------------------- */
// default delivery
document.getElementById('delivery-default').addEventListener('click',
function () {
    // extra memory price reduce 
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = 0;
    // update total price 
    const updateTotalPrice  = updateTotal();
});
// fast delivery 
document.getElementById('delivery-fast').addEventListener('click',
function () {
    const fastDelivery = 20;
    const deliveryCost = document.getElementById('delivery-charge');
    let newDeliveryCost = deliveryCost.innerText = fastDelivery;
    // update total price 
    const updateTotalPrice  = updateTotal();
});
/* ------------------------------------------------------------------------- */
//total
// bonus
// update total 
function updateTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-charge').innerText;
    // making number 
    const newBestPrice = parseInt(bestPrice);
    const newExtraMemoryCost = parseInt(extraMemoryCost);
    const newExtraStorageCost = parseInt(extraStorageCost);
    const newDeliveryCost = parseInt(deliveryCost);
    // calculation 
    const addedNumbers = newBestPrice + newExtraMemoryCost + newExtraStorageCost + newDeliveryCost ;
    //update total price
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = addedNumbers;
    //update promo total
    const promoTotal = document.getElementById('promo-total');
    promoTotal.innerText = addedNumbers;
};
/* ------------------------------------------------------------------------- */
//promo calculation
document.getElementById('apply-btn').addEventListener('click',
function () {
    // discount calculation
    const totalPrice = document.getElementById('total-price');
    const beforePromoTotal = parseInt(totalPrice.innerText);
    const ApplyingPromoTotal = beforePromoTotal-(beforePromoTotal * 0.2);
    //where to set
    const total = document.getElementById('promo-total');
    const inputField = document.getElementById('input-field');
    if (inputField.value == 'stevekaku') {
        total.innerText = ApplyingPromoTotal;
        inputField.value ='';
    }
    else {
        total.innerText = beforePromoTotal;
    }
})