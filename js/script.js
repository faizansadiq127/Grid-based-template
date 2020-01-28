var phoneScreen = $("#phone"); var phoneNumber = phoneScreen.val();
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
    phoneScreen.val(phoneNumber);
}