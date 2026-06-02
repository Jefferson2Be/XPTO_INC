/**
 * Validação do formulário no front-end na tela de Processo
 *
 * Ocorre antes da solicitação ser movimentada, após já ter sido selecionada a atividade destino o usuário
 * e demais informações necessárias à solicitação.
 *
 * @param {number} numState
 * @param {number} nextState
 * @returns {boolean} True submete o formulário, False cancela o envio
 * @throws {string} Mensagem de erro para cancelar o envio do formulário
 */
function beforeSendValidate(numState, nextState) {
  let mensagem = ''
  let devolutiva = ''
  let label = ''



  switch (parseInt(numState, 10)) {
    case 0:
    case atividades.inicio_4:
      mensagem = validateFields.set($("[id=painelDados]"))
      break;

    case atividades.almoxarife_5:
      mensagem = validateFields.set($("[id=painelAlmoxarife]"))

      if ($("#mecRecebida").val() == 'Nao') {
        utils.alert('Atenção !', 'O Processo só pode ser finalizado após a confirmação do recebimento da mercadoria.')
        return false
      }
      
      break;
    default:
      break;
  }

  switch (parseInt(nextState, 10)) {

    default:
      break;
  }
  if (!utils.isEmpty(mensagem)) {
    utils.alert('Atenção, os campos na cor vermelha são de preenchimento obrigatório!', mensagem)
  }
  return utils.isEmpty(mensagem)
}