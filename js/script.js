var activeElement = '';
var phoneNumber = '';

var phoneScreen = $("#phone"); 
phoneScreen.focusin(function() {
 console.log('phoneScreen');
 phoneNumber = phoneScreen.val();
 activeElement = phoneScreen;
});

var phoneScreen2 = $("#phone2"); 
phoneScreen2.focusin(function() {
 console.log('phoneScreen2');
 phoneNumber = phoneScreen2.val();
 activeElement = phoneScreen2;
});

var delBtn = $("#del"); var clrBtn = $("#clr");
var numBtn = $(".number");

numBtn.click(function() {
  var number = $(this).val();
  updatePhoneNumber(number);
  printPhoneNumber();
});
delBtn.click(function() {
    deleteNumber();
  printPhoneNumber();
});
clrBtn.click(function() {
  clearNumber();
  printPhoneNumber();
});

function updatePhoneNumber(newNumber) {
    phoneNumber = phoneNumber + newNumber;
}
function deleteNumber() {
    phoneNumber = phoneNumber.slice(0,-1);
}
function clearNumber() {
    phoneNumber = "";
}
function printPhoneNumber() {
    activeElement.val(phoneNumber);
    activeElement.focus();
}



var p='599';
var price = `<span>${p}</span>`+' Kr';
document.getElementById('product-price').innerHTML=price;

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  price = `<span>${p * value}</span>`+' Kr';
  document.getElementById('product-price').innerHTML=price;
}

function fremove()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;

  price = `<span>${p * value}</span>`+' Kr';
  document.getElementById('product-price').innerHTML=price;
}



var p1='79';
var price1 = `<span>${p1}</span>`+' Kr';
document.getElementById('price').innerHTML=price1;

//Second item

function add()
{
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number1').value = value;
  price1 = `<span>${p1 * value}</span>`+' Kr';
  document.getElementById('price').innerHTML=price1;
}

function remove()
{
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number1').value = value;

  price1 = `<span>${p1 * value}</span>`+' Kr';
  document.getElementById('price').innerHTML=price1;
}
