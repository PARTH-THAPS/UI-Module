import ExcelJS from 'exceljs';

export class RateController {
    static FormUI(req, res) {
        res.render('rateCardForm');
    }

    static LargeRateCardUI(req, res) {
        res.render('LargeRc');
    }

     async modelSend(req, res) {

        console.log(req.body);
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


            let data=[];


            

            if(LocalStd){
            var obj={
            billing_zone_code: "LOCAL-STD_LOCAL-STD_RTO",
            based_on: "WEIGHT",
            from: 0,
            to: minimum_weight,
            slab_freight: minimum_weight * LocalStd,
            incremental_weight_slab: 1,
            incremental_freight: LocalStd,
            service_type: "default",
            order_type: "default"       
        }
        data.push(obj);

        var dupli=
        {
            billing_zone_code: "LOCAL-EXP_LOCAL-EXP_RTO",
            based_on: "WEIGHT",
            from: 0,
            to: minimum_weight,
            slab_freight: minimum_weight * LocalStd,
            incremental_weight_slab: 1,
            incremental_freight: LocalStd,
            service_type: "default",
            order_type: "default"       
        }
        data.push(dupli);

        var obj1={
            billing_zone_code: "LOCAL-STD_LOCAL-STD_FORWARD",
            based_on: "WEIGHT",
            from: 0,
            to: minimum_weight,
            slab_freight: minimum_weight * LocalStd,
            incremental_weight_slab: 1,
            incremental_freight: LocalStd,
            service_type: "default",
            order_type: "default"       
        }


        data.push(obj1);


        var dupli1=
        {
            billing_zone_code: "LOCAL-EXP_LOCAL-EXP_FORWARD",
            based_on: "WEIGHT",
            from: 0,
            to: minimum_weight,
            slab_freight: minimum_weight * LocalStd,
            incremental_weight_slab: 1,
            incremental_freight: LocalStd,
            service_type: "default",
            order_type: "default"       
        }


        data.push(dupli1);
    }


    if(LocalExp){
        var obj={
        billing_zone_code: "LOCAL-EXP_LOCAL-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * LocalExp,
        incremental_weight_slab: 1,
        incremental_freight: LocalExp,
        service_type: "default",
        order_type: "default"       
    }

    data.push(obj);

    var dupli1={
        billing_zone_code: "LOCAL-STD_LOCAL-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * LocalExp,
        incremental_weight_slab: 1,
        incremental_freight: LocalExp,
        service_type: "default",
        order_type: "default"       
    }

    data.push( dupli1);

    var dupli=
    {
        billing_zone_code: "LOCAL-EXP_LOCAL-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * LocalExp,
        incremental_weight_slab: 1,
        incremental_freight: LocalExp,
        service_type: "default",
        order_type: "default"       
    }

    data.push(dupli);

    var obj1={
        billing_zone_code: "LOCAL-STD_LOCAL-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * LocalExp,
        incremental_weight_slab: 1,
        incremental_freight: LocalExp,
        service_type: "default",
        order_type: "default"       
    }


    data.push(obj1);


}


// zonal

if(ZonalStd){
    var obj={
    billing_zone_code: "ZONAL-STD_ZONAL-STD_RTO",
    based_on: "WEIGHT",
    from: 0,
    to: minimum_weight,
    slab_freight: minimum_weight * ZonalStd,
    incremental_weight_slab: 1,
    incremental_freight: ZonalStd,
    service_type: "default",
    order_type: "default"       
}
data.push(obj);

var dupli=
{
    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_RTO",
    based_on: "WEIGHT",
    from: 0,
    to: minimum_weight,
    slab_freight: minimum_weight * ZonalStd,
    incremental_weight_slab: 1,
    incremental_freight: ZonalStd,
    service_type: "default",
    order_type: "default"       
}
data.push(dupli);

var obj1={
    billing_zone_code: "ZONAL-STD_ZONAL-STD_FORWARD",
    based_on: "WEIGHT",
    from: 0,
    to: minimum_weight,
    slab_freight: minimum_weight * ZonalStd,
    incremental_weight_slab: 1,
    incremental_freight: ZonalStd,
    service_type: "default",
    order_type: "default"       
}
data.push(obj1);


var dupli1=
{
    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_FORWARD",
    based_on: "WEIGHT",
    from: 0,
    to: minimum_weight,
    slab_freight: minimum_weight * ZonalStd,
    incremental_weight_slab: 1,
    incremental_freight: ZonalStd,
    service_type: "default",
    order_type: "default"       
}
data.push(dupli1);
}


if(ZonalExp){
var obj={
billing_zone_code: "ZONAL-EXP_ZONAL-EXP_RTO",
based_on: "WEIGHT",
from: 0,
to: minimum_weight,
slab_freight: minimum_weight * ZonalExp,
incremental_weight_slab: 1,
incremental_freight: ZonalExp,
service_type: "default",
order_type: "default"       
}
data.push(obj);

var dupli1={
billing_zone_code: "ZONAL-STD_ZONAL-STD_RTO",
based_on: "WEIGHT",
from: 0,
to: minimum_weight,
slab_freight: minimum_weight * ZonalExp,
incremental_weight_slab: 1,
incremental_freight: ZonalExp,
service_type: "default",
order_type: "default"       
}
data.push( dupli1);

var dupli=
{
billing_zone_code: "ZONAL-EXP_ZONAL-EXP_FORWARD",
based_on: "WEIGHT",
from: 0,
to: minimum_weight,
slab_freight: minimum_weight * ZonalExp,
incremental_weight_slab: 1,
incremental_freight: ZonalExp,
service_type: "default",
order_type: "default"       
}
data.push(dupli);

var obj1={
billing_zone_code: "ZONAL-STD_ZONAL-STD_FORWARD",
based_on: "WEIGHT",
from: 0,
to: minimum_weight,
slab_freight: minimum_weight * ZonalExp,
incremental_weight_slab: 1,
incremental_freight: ZonalExp,
service_type: "default",
order_type: "default"       
}
data.push(obj1);


}






//metro


if(MetroStd && !MetroExp)
{
    var obj={
        billing_zone_code: "METRO-STD_METRO-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroStd,
        incremental_weight_slab: 1,
        incremental_freight: MetroStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "METRO-EXP_METRO-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroStd,
        incremental_weight_slab: 1,
        incremental_freight: MetroStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "METRO-STD_METRO-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroStd,
        incremental_weight_slab: 1,
        incremental_freight: MetroStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "METRO-EXP_METRO-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroStd,
        incremental_weight_slab: 1,
        incremental_freight: MetroStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli1);

}


if(!MetroStd && MetroExp)
{
    var obj={
        billing_zone_code: "METRO-STD_METRO-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroExp,
        incremental_weight_slab: 1,
        incremental_freight: MetroExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "METRO-EXP_METRO-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroExp,
        incremental_weight_slab: 1,
        incremental_freight: MetroExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "METRO-STD_METRO-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroExp,
        incremental_weight_slab: 1,
        incremental_freight: MetroExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "METRO-EXP_METRO-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroExp,
        incremental_weight_slab: 1,
        incremental_freight: MetroExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli1);

}



if(MetroStd && MetroExp){

    var obj={
        billing_zone_code: "METRO-STD_METRO-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroStd,
        incremental_weight_slab: 1,
        incremental_freight: MetroStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "METRO-EXP_METRO-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroExp,
        incremental_weight_slab: 1,
        incremental_freight: MetroExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "METRO-STD_METRO-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroStd,
        incremental_weight_slab: 1,
        incremental_freight: MetroStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "METRO-EXP_METRO-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * MetroExp,
        incremental_weight_slab: 1,
        incremental_freight: MetroExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli1);
}



///////ROI




if(ROIStd && !ROIExp)
{
    var obj={
        billing_zone_code: "ROI-STD_ROI-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIStd,
        incremental_weight_slab: 1,
        incremental_freight: ROIStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "ROI-EXP_ROI-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIStd,
        incremental_weight_slab: 1,
        incremental_freight: ROIStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "ROI-STD_ROI-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIStd,
        incremental_weight_slab: 1,
        incremental_freight: ROIStd,
        service_type: "default",
        order_type: "default"       
    }


    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "ROI-EXP_ROI-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIStd,
        incremental_weight_slab: 1,
        incremental_freight: ROIStd,
        service_type: "default",
        order_type: "default"       
    }


    data.push(dupli1);

}


if(!ROIStd && ROIExp)
{
    var obj={
        billing_zone_code: "ROI-STD_ROI-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIExp,
        incremental_weight_slab: 1,
        incremental_freight: ROIExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "ROI-EXP_ROI-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIExp,
        incremental_weight_slab: 1,
        incremental_freight: ROIExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "ROI-STD_ROI-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIExp,
        incremental_weight_slab: 1,
        incremental_freight: ROIExp,
        service_type: "default",
        order_type: "default"       
    }


    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "ROI-EXP_ROI-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIExp,
        incremental_weight_slab: 1,
        incremental_freight: ROIExp,
        service_type: "default",
        order_type: "default"       
    }


    data.push(dupli1);

}



if(ROIStd && ROIExp){

    var obj={
        billing_zone_code: "ROI-STD_ROI-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIStd,
        incremental_weight_slab: 1,
        incremental_freight: ROIStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "ROI-EXP_ROI-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIExp,
        incremental_weight_slab: 1,
        incremental_freight: ROIExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "ROI-STD_ROI-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIStd,
        incremental_weight_slab: 1,
        incremental_freight: ROIStd,
        service_type: "default",
        order_type: "default"       
    }


    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "ROI-EXP_ROI-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * ROIExp,
        incremental_weight_slab: 1,
        incremental_freight: ROIExp,
        service_type: "default",
        order_type: "default"       
    }


    data.push(dupli1);
}





//nej&k


if(NEJKStd && !NEJKExp)
{
    var obj={
        billing_zone_code: "NE J&K-STD_NE J&K-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKStd,
        incremental_weight_slab: 1,
        incremental_freight: NEJKStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKStd,
        incremental_weight_slab: 1,
        incremental_freight: NEJKStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "NE J&K-STD_NE J&K-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKStd,
        incremental_weight_slab: 1,
        incremental_freight: NEJKStd,
        service_type: "default",
        order_type: "default"       
    }


    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "NE J&K-EXP_NE J&K-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKStd,
        incremental_weight_slab: 1,
        incremental_freight: NEJKStd,
        service_type: "default",
        order_type: "default"       
    }


    data.push(dupli1);

}


if(!NEJKStd && NEJKExp)
{
    var obj={
        billing_zone_code: "NE J&K-STD_NE J&K-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKExp,
        incremental_weight_slab: 1,
        incremental_freight: NEJKExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKExp,
        incremental_weight_slab: 1,
        incremental_freight: NEJKExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "NE J&K-STD_NE J&K-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKExp,
        incremental_weight_slab: 1,
        incremental_freight: NEJKExp,
        service_type: "default",
        order_type: "default"       
    }


    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "NE J&K-EXP_NE J&K-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKExp,
        incremental_weight_slab: 1,
        incremental_freight: NEJKExp,
        service_type: "default",
        order_type: "default"       
    }


    data.push(dupli1);

}



if(NEJKStd && NEJKExp){

    var obj={
        billing_zone_code: "NE J&K-STD_NE J&K-STD_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKStd,
        incremental_weight_slab: 1,
        incremental_freight: NEJKStd,
        service_type: "default",
        order_type: "default"       
    }
    data.push(obj);

    var dupli=
    {
        billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKExp,
        incremental_weight_slab: 1,
        incremental_freight: NEJKExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli);

    var obj1={
        billing_zone_code: "NE J&K-STD_NE J&K-STD_RTO",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKStd,
        incremental_weight_slab: 1,
        incremental_freight: NEJKStd,
        service_type: "default",
        order_type: "default"       
    }


    data.push(obj1);


    var dupli1=
    {
        billing_zone_code: "NE J&K-EXP_NE J&K-EXP_FORWARD",
        based_on: "WEIGHT",
        from: 0,
        to: minimum_weight,
        slab_freight: minimum_weight * NEJKExp,
        incremental_weight_slab: 1,
        incremental_freight: NEJKExp,
        service_type: "default",
        order_type: "default"       
    }
    data.push(dupli1);
}



            const headers = Object.keys(data[0]);
            sheet.addRow(headers);       
            data.forEach(row => {
                sheet.addRow(Object.values(row));
            });

            // Save the workbook
      await workbook.xlsx.writeFile('/home/parth/Downloads/largeRateCard.xlsx');
      res.sendFile('/home/parth/Downloads/largeRateCard.xlsx');
      
            console.log("Excel file generated successfully");
        } catch (err) {
            console.error("Error generating Excel file:", err);
            res.status(500).send("Error generating Excel file");
        }
    }
}
