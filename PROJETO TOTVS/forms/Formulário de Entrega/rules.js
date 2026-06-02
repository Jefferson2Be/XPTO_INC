const rules = {
    buscaCep: async () => {
        let campoCep = $("#cepOrigem").val().replace('-', '')
        if (campoCep.length != 8) {
            $("#cidadeOrigem").val('').trigger('input')
            $("#bairroOrigem").val('').trigger('input')
            $("#endOrigem").val('').trigger('input')
            return
        }

        try {
            let consult = await fetch(`https://viacep.com.br/ws/${campoCep}/json/`)
            let response = await consult.json()
            if (!utils.isEmpty(response)) {
                $("#cidadeOrigem").val(response.localidade)
                $("#bairroOrigem").val(response.bairro)
                $("#endOrigem").val(response.logradouro)
            }

        } catch (error) {
            utils.toast('Atenção !', 'Ocorreu algum erro na consulta do Cep')
            console.log("Erro" + error)
        }
    },
    persist: () => {
        if (!utils.isEmpty($('[id$=mecRecebida]').val())) {
            $("#painelAlmoxarife").show()

        }
    }
}
