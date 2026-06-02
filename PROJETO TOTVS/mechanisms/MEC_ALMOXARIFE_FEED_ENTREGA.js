function resolve(process, colleague) {
	// log.info(">>>Entrou mec > ");
	var WKDef = getValue("WKDef")
	var WKNumProces = getValue("WKNumProces") || process.workflowProcessPK.processInstanceId;
	var WKIsTransfer = getValue("WKIsTransfer") || false;
	var sequence = process.chosenState == null ? 0 : parseInt(process.chosenState.processStatePK.sequence, 10);
	var userList = new java.util.ArrayList();
	var solicitanteResponsavel = hAPI.getCardValue("matriculaResponsavel");

	if (sequence == "5") {
		userList.add(solicitanteResponsavel);
	}

	return userList;
}
