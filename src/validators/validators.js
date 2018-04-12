jQuery.validator.addMethod('preco', function (value, element) {
    var min = 0.01;
    var cleanValue = element.value.toString().replace(/^-/, '').replace(/^0*/, '');
    var value = parseFloat(cleanValue.replace(/[^0-9]/g, ''));
    var retorno = !isNullOrEmpty(value) && !isNaN(value) && value >= min;
    return retorno;

}, 'Informe o valor do sonho, deve ser maior que 0');

/*Validação formulário página de sonhos */
$("#formSonho").validate({
    rules: {
        valorSonho: {
            required: true,
            preco: true
        },
        meses: {
            required: true,
            min: 1
        }
    },
    messages: {
        valorSonho: "Informe o valor do sonho, deve ser maior que 1.00",
        meses: " Informe em quantos meses pretende realizar o sonho, o valor mínimo é 1"
    },
    errorPlacement: function (error, element) {
        $(element).parent('div').addClass('has-error');
        error.addClass("help-block");
        error.insertAfter(element);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).parent('div').addClass('has-error').removeClass("has-success");
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).parent('div').addClass('has-success').removeClass("has-error");
    }
});