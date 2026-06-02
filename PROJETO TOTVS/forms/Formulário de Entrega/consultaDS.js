const consultaDS = {
    VERICA_FILIAL_CADASTRADA: () => {
        let ds = DatasetFactory.getDataset("DS_PRE_CADASTRO_FILIAL", null, null, null)

        return ds || []
    }
}