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
    onAll: (params) => { },
    onView: (params) => { 
        $("#btnSalvar").hide()
    },
    onEdit: (params) => {
        validateFields.update()
        parent.$(".wcm-panel-bt-custom").hide()
        parent.$("#ecm-documentview-cardSave").hide()

        if (!utils.isEmpty($("#codFilial").val())) {
            $("#codFilial").prop("readonly", true);
        }

    },
};
