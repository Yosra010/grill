
let total = 0;
let items = [];
let maxItems = 10;

function addItem(name, price){

if(items.length >= maxItems){
alert("الحد الأقصى 10 منتجات فقط");
return;
}

items.push({name, price});
total += price;

updateInvoice();
}

function updateInvoice(){
let list = document.getElementById("invoiceList");
list.innerHTML = "";

items.forEach(item => {
let li = document.createElement("li");
li.textContent = item.name + " - " + item.price + " جنيه";
list.appendChild(li);
});

document.getElementById("total").textContent = total;
}

function checkout(){

if(items.length === 0){
alert("لم يتم اختيار منتجات");
return;
}

localStorage.setItem("invoiceItems", JSON.stringify(items));
localStorage.setItem("invoiceTotal", total);

window.location.href = "invoice.html";
}
