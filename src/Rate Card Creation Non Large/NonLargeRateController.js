import ExcelJS from "exceljs";

export class NonLargeRateController {

    async RateCardCreation(req, res) {
        const {
            local,
            LocalExp,
            LocalStd,
            ZonalStd,
            zonal,
            ZonalExp,
            metroStd,
            metroExp,
            MetroStd,
            MetroExp,
            roiStd,
            roiExp,
            ROIStd,
            ROIExp,
            nejkStd,
            nejkExp,
            NEJKStd,
            NEJKExp,
            rtolocal,
            LocalExpRto,
            rtozonal,
            ZonalExpRto,
            rtometroStd,
            rtometroExp,
            MetroStdRto,
            MetroExpRto,
            rtoroiStd,
            rtoroiExp,
            ROIStdRto,
            ROIExpRto,
            rtonejkStd,
            rtonejkExp,
            NEJKStdRto,
            NEJKExpRto,
            incremental_weight_slab,
            rvp_slab
        } = req.body;

       

        try {
            const workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('Sheet1');
            let data = [];

           


            if (LocalExp) {

                var localSlab = LocalExp.split('/');
                const localFreight = localSlab[0];
                
                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "LOCAL-EXP_LOCAL-EXP_FORWARD",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: localFreight,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj);

                const dupli = {
                    billing_zone_code: "LOCAL-STD_LOCAL-STD_FORWARD",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: localFreight,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli);
            }

            if (data.length > 0) {
                const headers = Object.keys(data[0]);
                sheet.addRow(headers);

                data.forEach(row => {
                    sheet.addRow(Object.values(row));
                });

                // Save the workbook
                const filePath = '/home/parth/Downloads/nonLargeRateCard.xlsx'; // Update file path
                await workbook.xlsx.writeFile(filePath);
                console.log("Excel file generated successfully");
                res.sendFile(filePath); // Return the generated file to the client
            } else {
                console.log("No data to write to Excel");
                res.status(400).send("No data provided");
            }

        } catch (error) {
            console.error("Error generating Excel file:", error);
            res.status(500).send("Error generating Excel file");
        }
    }
}
