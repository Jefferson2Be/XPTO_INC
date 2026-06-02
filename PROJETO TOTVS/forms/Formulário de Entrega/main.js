/**
 * ! Este arquivo tem como objetivo evitar duplicidade de regras durante o uso dos eventos do fluig.
 * * Sendo assim, aqui deve conter regras de manipulação das atividades.
 * * Caso precise de alguma função extra utilizar o arquivo roles, onde devera conter as regras gerais.
 * ? Dúvidas: Falar com seu responsável de projeto ou peça ajuda a um dos membros da equipe.
 */

const main = {
    init: (params) => {
        main.onAll(params);

        if (params.formMode == "VIEW") {
            main.onView(params);
        } else {
            main.onEdit(params);
        }
    },
    onAll: (params) => {
        rules.persist()
     },
    onView: (params) => { },
    onEdit: (params) => {
        validateFields.update()
        switch (params.WKNumState) {
            case 0:
            case atividades.inicio_4:
                const filialCadastrada = consultaDS.VERICA_FILIAL_CADASTRADA()
                if (utils.isEmpty(filialCadastrada.values.length)) {
                    utils.toast("ATENÇÃO: ", "Não existe nenhum registro de Filial no Pré Cadastro responsável, favor solicitar á area responsável ")
                }
                utils.setCalendar("#prazoEntrega", true, false, false)
                utils.dataInvalida('prazoEntrega')
                break;
            case atividades.almoxarife_5:
                $("#painelAlmoxarife").show()
                $("#responsavelAlmoxarife").val(params.UserFullName)
                $("#dtAlmoxarife").val(utils.getActualDateHourFormatBR())

                break;
        }
    },
};
