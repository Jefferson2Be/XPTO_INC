const rules = {
    verificaObrigatoriedade: () => {
        let mensagem = validateFields.set($("[id=painelPreCadastro]"))
        let idBtnConfirmar = window.parent.document.getElementsByClassName('totvs-btn-action')[2]?.id ||
            'ecm-documentview-cardSave';

        if (!utils.isEmpty(mensagem)) {
            utils.alert('Atenção, os campos na cor vermelha são de preenchimento obrigatório!', mensagem);
        } else {
            const existeFilial = consultaDS.VERICA_FILIAL_EXISTENTE($("#codFilial").val())

            const verificaEdit = idBtnConfirmar == 'ecm-documentview-cardSave' ? existeFilial.values.length == 1
                : utils.isEmpty(existeFilial.values.length)

            verificaEdit ? parent.$(`[id=${idBtnConfirmar}]`).click()
                : utils.alert('Atenção !', "Não é possivel registrar duas filiais iguais, favor utilizar outro código de filial !");

        }
    }
}