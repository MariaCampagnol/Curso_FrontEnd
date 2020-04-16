$(function () {

    abrirJanela();
    verificarClickFechar();

    function abrirJanela() {
        $('.btn').click(function (e) {
            e.stopPropagation();
            $('.bg').fadeIn();
        });

        $('input[type=text]').focus(function () {
            resetaCampoInvalido($(this));
        });
    }

    function verificarClickFechar() {
        var el = $('body,.close-btn');

        el.click(function () {
            $('.bg').fadeOut();
        });

        $('.form').click(function (e) {
            e.stopPropagation();
        });
    }

    $('form#form1').submit(function (e) {
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email]').val();
        var telefone = $('input[name=telefone]').val();

        if (verificaNome(nome) == false) {
            aplicarCampoInvalido($('input[name=nome]'));
            return false
        }
        else if (verificaEmail(email) == false) {
            aplicarCampoInvalido($('input[name=email]'));
            return false
        }
        else if (verificaTelefone(telefone) == false) {
            aplicarCampoInvalido($('input[name=telefone]'));
            return false
        }
        else
            alert('Fomulário enviado');
    });

    function verificaNome(nome) {
        if (nome == '')
            return false;

        var tamanhoNome = nome.split(' ').length;
        var splitStr = nome.split(' ');

        if (tamanhoNome >= 2) {
            for (var i = 0; i < tamanhoNome; i++) {
                //verifica se tem apenas caracteres sem numero
                //verifica tambem se comea com maiusculo e as outras letras sao todas minusculas
                if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                } else
                    return false;
            }
        } else
            return false;
    }

    function verificaEmail(email) {
        if (email == '')
            return false;

        //if(email.match(/^([a-z0-9]{1,})+@+([a-z.]{1,})$/) == null)
        if (email.match(/([a-z0-9.]{1,})+@+[a-z]+(\.[a-z]{1,})$/) == null)
            return false
    }

    function verificaTelefone(telefone) {
        if (telefone == '')
            return false;

        if ((telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/)) == null)
            return false
    }

    function aplicarCampoInvalido(el) {
        $(el).css('border', '2px solid red');
        $(el).val('');
    }

    function resetaCampoInvalido(el) {
        $(el).css('border', '1px solid purple');
        $(el).val('');
    }
}); 