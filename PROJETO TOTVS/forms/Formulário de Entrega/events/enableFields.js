function enableFields(form) {
    /**
     * ! As intruções indicadas a baixo não podemos ser retiradas, pois são obrigatórias e servem para o funcionamento do formulário.
     * * Caso precise de alguma informação extra certifique que a mesma NÃO está indicada e se faz sentido estar aqui.
     * ? Dúvidas: Falar com seu responsável de projeto ou peça ajuda a um dos membros da equipe.
     */

    log.info('>>> enableFields > ')
    var params = {
        WKNumProces: parseInt(getValue('WKNumProces'), 10),
        WKNumState: parseInt(getValue('WKNumState'), 10),
        WKNextState: parseInt(getValue('WKNextState'), 10),
        documentId: parseInt(getValue('documentId'), 10),
        WKUser: getValue('WKUser'),
        UserFullName: fluigAPI.getUserService().getCurrent().getFullName(),
        UserEmail: fluigAPI.getUserService().getCurrent().getEmail(),
        formModeView: form.getFormMode() == 'VIEW',
        isMobile: (form.getMobile() != null && form.getMobile()),
    }

    var mapForm = new java.util.HashMap();
    mapForm = form.getCardData();
    var it = mapForm.keySet().iterator();
    while (it.hasNext()) {
        var key = it.next();
        var isEnabled = form.getEnabled(key);
        if (isEnabled == true) {
            form.setEnabled(key, false, false);
        } else {
            form.setEnabled(key, true);
        }
    }

    //* Apartir desta linha, você poderá aplicar as regras de liberação dos campos

    form.setEnabled("matriculaResponsavel", true);


    switch (params.WKNumState) {
        case 0:
        case 4:
            form.setEnabled("cepOrigem", true);
            form.setEnabled("cidadeOrigem", true);
            form.setEnabled("bairroOrigem", true);
            form.setEnabled("endOrigem", true);
            form.setEnabled("filialEntrega", true);
            form.setEnabled("prazoEntrega", true);
            form.setEnabled("descMercadoria", true);
            break;

        case 5:
            form.setEnabled("responsavelAlmoxarife", true);
            form.setEnabled("dtAlmoxarife", true);
            form.setEnabled("mecRecebida", true);
            break;
    }
}