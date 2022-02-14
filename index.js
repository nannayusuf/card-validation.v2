import validator from './validator.js';



let elementoBtn = document.getElementById('finishButton');
let cardNumber = document.getElementById('cardInput');
let cardNumberHidden = document.getElementById('cardinput-hidden');

elementoBtn.addEventListener("click", function () {
 let valid;

  if (cardNumberHidden.value.length === 16) {
    valid = validator.isValid(cardNumberHidden.value);

  } else {
    valid = false;
  }

  if (valid) {
    let msg = "Compra concluída";
    alert(msg);
  } else {
    let msgErro = "Cartão inválido";
    alert(msgErro);
  }

});

cardNumber.addEventListener("keyup", function(event) {
  let number = parseInt(event.key);

  if (!isNaN(number)) {
    cardNumberHidden.value = cardNumberHidden.value + event.key;
  }

  cardNumber.value = validator.maskify(cardNumber.value);
});
