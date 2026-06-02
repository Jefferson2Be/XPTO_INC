const consultaDS = {
    VERICA_FILIAL_EXISTENTE: (cod) => {
        let ds = DatasetFactory.getDataset("DS_PRE_CADASTRO_FILIAL", null, [
            DatasetFactory.createConstraint('codFilial', cod, cod, ConstraintType.MUST),
        ], null)

        return ds || []
    }
}