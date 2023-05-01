document.getElementById("detail-submit-btn").addEventListener('click', function(){
    const userDetailsInputValue = document.getElementById('buyer-details-input');
    document.getElementById("buyer-info").innerText = userDetailsInputValue.value;
    userDetailsInputValue.value = "";

});

const addProductsBtn = document.getElementById("add-details-btn");

addProductsBtn.addEventListener('click', function(){

    const infoTable = document.getElementById('info-table');
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    // create dynamic table jekhane uporeer info gula dekhabe haaa
    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

});