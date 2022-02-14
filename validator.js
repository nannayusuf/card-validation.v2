const validator = {
  'isValid': function (number) {
    let sum = 0;
    let digit = 0;
    const parity = number.length % 2;
    // verifica se o comprimento da string é par ou ímpar

    for (let i = 0; i < number.length; i++) {
      digit = parseInt(number.charAt(i)); // converte o caractere na posição i em Tipo Inteiro 
      if (i % 2 === parity) {
        digit = digit * 2;
        if (digit > 9) {
          digit = digit - 9; //se o número for maior que 9, soma-se os algarismo (-9)
        }
      }
      // se o resto da divisão do índice por 2 for = ao resto da divisão do comprimento da string por 2 multiplica por 2
      sum = sum + digit;
    }

    return (sum % 10 === 0)
  },

  'maskify': function (number) {
    let ccLength = number.length;

    if (number.length <= 4) {
      return number;
    }

    let mask = "";
    let iterableRange = ccLength - 4;

    for (let index = 0; index < iterableRange; index++) {
      mask += "#";
    }

    mask += number.substr(-4);

    return mask;
  }
};

export default validator;
