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

    // functional way te duita korbo 
    const tr = element('tr');
    const th = element('th');
    // Not use Function 
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');


    td3.classList.add("item-total");
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

    // itemName.value = '';
    // itemPrice.value = '';
    // itemQuantity.value = '';
    totalCalCulateTotal();

});

function element(tagName){
    return document.createElement(tagName);
}

function totalCalCulateTotal(){

const subTotal = calCulateSubTotal();
const subTotalToDisplay = document.getElementById("sub-total");
subTotalToDisplay.innerText = subTotal;

const tax = subTotal * 0.2 ;

document.getElementById('tax').innerText = tax.toFixed(2);
document.getElementById('grand-total').innerText = subTotal + tax;
document.getElementById('grand-total-2').innerText = subTotal + tax;

} 

function calCulateSubTotal(){
    const cost = document.getElementsByClassName("item-total");
    // akhane cost ta hosse dynamic vhabe add kora class name tai ati console log a innerHtmlElement ba array akare show kore tai ar every element pauyar jonno for loop usse korte hobe 
    let subTotal = 0;
    for(let i = 0; i < cost.length; i++){
        const element = cost[i];
        console.log(element.innerText);
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
    

}