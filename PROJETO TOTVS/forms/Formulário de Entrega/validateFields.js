/**
* ! Este arquivo tem como objetivo validar o preenchimento dos campos.
* * Sendo assim, aqui deve conter funções que possam facilitar a manipulação e padronizações do projeto.
* * Caso precise de alguma função extra certifique que a mesma NÃO está indicada e se faz sentido estar aqui.
* ? Dúvidas: Falar com seu responsável de projeto ou peça ajuda a um dos membros da equipe.
* 
* ! ATENÇÃO: Para funcionamento deste arquivo se faz necessário o uso da classe required
* * EXEMPLO: <label for="nomeCampo" class="control-label required">Solicitante</label>
*/
const validateFields = {
  typeOfValue: (el) => {
    switch (el[0].type) {
      case 'checkbox':
        value = $(el).closest("div").find('input[type="checkbox"]:checked').length
        break;
      case 'radio':
        value = $(`[name=${el[0].name}]:checked`).length
        break;
      default:
        value = el.val()
        break;
    }
    return value
  },
  setStyle: (el, status) => {

    if (!utils.isEmpty(el)) {
      el.parent().removeClass("has-success").removeClass("has-error")
      el.parent().addClass(status ? "has-error" : "has-success")
    }
  },
  set: (el, style = true) => {
    let mensagem = ''
    el.find('.required').each((index, field) => {
      const fieldName = field.htmlFor;
      const label = $(field).children('input').prop('type') === "checkbox" ? $(field).closest('div').prev("label").html() : field.innerText.trim()
      const elLabel = $(`[for=${fieldName}]`)
      let elField = null
      let value = ''

      if (fieldName.split('___').length > 1) {
        let status = false;
        const tbl = $(field).closest("table").find("tbody tr").not(":first");
        const qtd = tbl.length;
        for (let i = 0; i < qtd; i++) {
          if (!tbl[i]) continue;
          const trId = tbl[i].id;

          if (trId.indexOf("___") > -1) {
            const indiceCampo = trId.split("___")[1];
            const inputField = $(`#${fieldName.split('___')[0]}___${indiceCampo}`);
            value = validateFields.typeOfValue(inputField);
            if (style) {
              validateFields.setStyle(inputField, utils.isEmpty(value));
            }
            status = status ? status : utils.isEmpty(value)
            value = !status
          } else {
            return
          }
        }
      } else {
        elField = $(`[name=${fieldName}]`)
        value = validateFields.typeOfValue(elField)

        if (style) {
          validateFields.setStyle(elLabel, utils.isEmpty(value))
        }
      }
      mensagem += utils.isEmpty(value) ? `- O campo <strong>${label}</strong> não foi preenchido \n` : "";
    })
    mensagem = [...new Set(mensagem.split('\n'))].join('\n')
    console.log(mensagem)
    return mensagem
  },
  update: () => {
    $(document).on(
      "change input",
      ".has-error input, .has-error textarea, .has-error select, .has-error .zoom, .has-success input, .has-success textarea, .has-success select, .has-success .zoom",
      function () {
        const element = $(this).closest(".has-error, .has-success");
        let preenchido = "";
        setTimeout(() => {
          element.hasClass("checkbox") ? preenchido = element
            .find('input[type="checkbox"]')
            .is(":checked") : preenchido = $(this).val();

          validateFields.setStyle(element.children(), utils.isEmpty(preenchido));
        }, 100);
      }
    );
  }
}