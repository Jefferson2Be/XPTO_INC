function displayFields(form, customHTML) {

    var params = {
        WKNumProces: parseInt(getValue("WKNumProces"), 10),
        WKNumState: parseInt(getValue("WKNumState"), 10),
        WKNextState: parseInt(getValue("WKNextState"), 10),
        documentId: parseInt(getValue("documentId"), 10),
        WKUser: getValue("WKUser"),
        UserFullName: fluigAPI.getUserService().getCurrent().getFullName(),
        Matricula: fluigAPI.getUserService().getCurrent().getCode(),
        UserEmail: fluigAPI.getUserService().getCurrent().getEmail(),
        formMode: form.getFormMode(),
        isMobile: (form.getMobile() != null && form.getMobile()),
    }

    customHTML.append("<script type='text/javascript'>");
    customHTML.append("    window.onload = () => {");
    customHTML.append("        if (main && main.init) {");
    customHTML.append("            main.init({");
    customHTML.append("                 WKNumProces: " + params.WKNumProces + ",");
    customHTML.append("                 WKNumState: " + params.WKNumState + ",");
    customHTML.append("                 WKNextState: " + params.WKNextState + ",");
    customHTML.append("                 documentId: " + params.documentId + ",");
    customHTML.append("                 WKUser: '" + params.WKUser + "',");
    customHTML.append("                 UserFullName: '" + params.UserFullName + "',");
    customHTML.append("                 UserEmail: '" + params.UserEmail + "',");
    customHTML.append("                 Matricula: '" + params.Matricula + "',");
    customHTML.append("                 formMode: '" + params.formMode + "',");
    customHTML.append("                 isMobile: " + params.isMobile + ",");
    customHTML.append("            });");
    customHTML.append("        }");
    customHTML.append("    }");
    customHTML.append("</script>");

    form.setShowDisabledFields(true);

}