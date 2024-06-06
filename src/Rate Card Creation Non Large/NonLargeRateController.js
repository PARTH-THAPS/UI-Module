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
            minimum_weight
        } = req.body;

        try {
            const workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('Sheet1');
            let data = [];

            if (data.length > 0) {
                const headers = Object.keys(data[0]);
                sheet.addRow(headers);

                data.forEach(row => {
                    sheet.addRow(Object.values(row));
                });

                // Save the workbook
                await workbook.xlsx.writeFile('/home/parth/Downloads/query execution/lotr1.xlsx');
                console.log("Excel file generated successfully");
                res.send("Excel file generated successfully");
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
