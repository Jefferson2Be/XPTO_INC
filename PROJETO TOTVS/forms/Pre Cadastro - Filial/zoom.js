/**
 * * Este aquivo tem como objetivo, indicar todas as regras relacionada a campo zoom relacionadas ao processo.
 * ? Dúvidas: Falar com seu responsável de projeto ou peça ajuda a um dos membros da equipe.
 */

function setSelectedZoomItem(selectedItem) {
    switch (selectedItem.inputId) {
        case 'respFilial':
            $("[id=matriculaResponsavel]").val(selectedItem.colleagueId);

            break;
    }
}

function removedZoomItem(removedItem) {
    switch (removedItem.inputId) {
        case 'respFilial':
            $("[id=matriculaResponsavel]").val('');

            break;
    }
}