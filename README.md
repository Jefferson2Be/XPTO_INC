XPTO_INC
Desafio Dev TOTVS
📋 Escopo do Projeto
A empresa XPTO Inc tem a necessidade de feedback do responsável do almoxarifado quanto a entrega de remessas e mercadorias entre as unidades dela.

Solicitação: Uma unidade cadastra uma solicitação onde identifica o ponto de coleta, a unidade destino e qual a mercadoria/conteúdo da entrega.

Confirmação: Após essa etapa inicial, cabe ao responsável do almoxarifado da unidade destino confirmar o recebimento da mercadoria.

Para tal objetivo, pretende-se implementar:

🏢 1. Pré-Cadastro de Filial
Campos requeridos:

Código

Nome

Endereço

Zoom de usuário responsável pelo almoxarifado

Regras de Negócio:

Ao cadastrar um novo registro, validar se o código já está cadastrado.

Todos os campos são obrigatórios.

📦 2. Processo de Entrega
Campos e Integrações:

CEP Origem: Integração com serviço de consulta pública (ex: ViaCEP).

Campos Complementares (Bloqueados): Preenchidos automaticamente com o retorno do CEP (Nome da rua, Cidade e Estado).

Zoom de Filial Destino: Listar com base nos dados do cadastro de empresa.

Prazo da Entrega: Não pode ser inferior à data atual.

Descrição: Campo descritivo da mercadoria.

Regras de Negócio:

Todos os campos mencionados são obrigatórios.

O usuário responsável pelo almoxarifado daquela filial destino deve confirmar o recebimento da mercadoria.

⚙️ Configurações Fluig
🛠️ Informações Técnicas do Ambiente:

Código Dataset Pré-Cadastro: DS_PRE_CADASTRO_FILIAL

Código Mecanismo Customizado: MEC_ALMOXARIFE_ENTREGA

Versão do Fluig: Crystal Mist 1.8.2-260413
