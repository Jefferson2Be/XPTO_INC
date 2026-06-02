/**
 * ! Este arquivo tem como objetivo evitar duplicidade de regras durante o uso dos eventos do fluig.
 * * Sendo assim, aqui deve conter funções que possam facilitar a manipulação e padronizações do projeto.
 * * Caso precise de alguma função extra certifique que a mesma NÃO está indicada e se faz sentido estar aqui.
 * ? Dúvidas: Falar com seu responsável de projeto ou peça ajuda a um dos membros da equipe.
 */
const utils = {
    getActualDate: () => {
        return new Date();
    },
    getActualDateFormatBR: () => {
        return utils.getActualDate().toLocaleDateString();
    },
    getActualDateHourFormatBR: () => {
        return utils.getActualDate().toLocaleString().replaceAll(',', '')
    },
    getActualDateFormatISO: () => {
        return utils.getActualDate().toISOString();
    },
    isEmpty: (value = '') => {
        return value == '' || value == undefined || value == "undefined" || value == null || value == "null" || value.length <= 0 || value == '0,00' || value == '0,0000' || value == '&nbsp;'
    },
    setVlrUS: (value = '0,00') => {
        return parseFloat(value.replaceAll('.', '').replaceAll(',', '.'))
    },
    setVlrBR: (value = 0, precision = 2) => {
        return parseFloat(value).toLocaleString('pt-br', { minimumFractionDigits: precision })
    },
    setCalendar: (fieldName, pickDate = true, pickTime = true, sideBySide = true) => {
        return FLUIGC.calendar(fieldName, {
            pickDate: pickDate,
            pickTime: pickTime,
            sideBySide: sideBySide
        });
    },
    toast: (title = 'Erro: ', message = 'Ops! não foi possível apresentar a mensagem.', type = 'danger') => {
        FLUIGC.toast({
            title: title,
            message: message,
            type: type
        });
    },
    alert: (title = 'Erro', message = 'Ops! não foi possível apresentar a mensagem.', label = 'OK', events = null) => {
        FLUIGC.message.alert({
            message: message,
            title: title,
            label: label
        }, function (el, ev) {
            events
        });
    },
    modal: (title = '', content, id = 'fluig-modal', size = 'small', actions = [], events = null) => {
        FLUIGC.modal({
            title: title,
            content: content,
            id: id,
            size: size,
            actions: actions,
        }, function (err, data) {
            events
        });
    },
    dataInvalida: (vlrCampo) => {
        var hoje = new Date();
        var dia = String(hoje.getDate()).padStart(2, '0');
        var mes = String(hoje.getMonth() + 1).padStart(2, '0');
        var ano = hoje.getFullYear();
        var dataHoje = dia + '/' + mes + '/' + ano;

        $('#' + vlrCampo).on('blur', function () {
            var valor = $(this).val();
            if (valor) {
                var partes = valor.split('/');
                var dataDigitada = new Date(partes[2], partes[1] - 1, partes[0]);

                // Zera horas para comparação correta
                dataDigitada.setHours(0, 0, 0, 0);
                hoje.setHours(0, 0, 0, 0);

                if (dataDigitada < hoje) {
                    utils.toast('Data inválida: ', 'A data não pode ser menor que hoje.', 'warning')
                    $(this).val('');
                }
            }
        });

    },
    bloqueiaData: (id) => {
        $("#" + id).val("")
    }
}