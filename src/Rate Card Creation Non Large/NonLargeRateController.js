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
            ZonalStdRto,
            LocalStdRto,
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

            console.log(req.body);


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

                var sum1 = parseInt(localFreight) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "LOCAL-EXP_LOCAL-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);
                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                const dupli1 = {
                    billing_zone_code: "LOCAL-STD_LOCAL-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);


            }


            if (LocalStd) {
                var localSlab = LocalStd.split('/');
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

                var sum1 = parseInt(localFreight) + parseInt(rvp_slab);

                const obj1 = {
                    billing_zone_code: "LOCAL-EXP_LOCAL-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                const dupli1 = {
                    billing_zone_code: "LOCAL-STD_LOCAL-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);



            }



            if (ZonalExp) {
                var localSlab = ZonalExp.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_FORWARD",
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
                    billing_zone_code: "ZONAL-STD_ZONAL-STD_FORWARD",
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
                var sum1 = parseInt(localFreight) + parseInt(rvp_slab);;
                const obj1 = {
                    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                const dupli1 = {
                    billing_zone_code: "ZONAL-STD_ZONAL-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);

            }


            if (ZonalStd) {
                var localSlab = ZonalStd.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_FORWARD",
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
                    billing_zone_code: "ZONAL-STD_ZONAL-STD_FORWARD",
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
                var sum1 = parseInt(localFreight) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "ZONAL-STD_ZONAL-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);
            }

            if (MetroStd && !MetroExp) {
                var localSlab = MetroStd.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_FORWARD",
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
                    billing_zone_code: "METRO-STD_METRO-STD_FORWARD",
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
                var sum1 = parseInt(localFreight) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "METRO-STD_METRO-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);


            }

            if (!MetroStd && MetroExp) {
                var localSlab = MetroExp.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_FORWARD",
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
                    billing_zone_code: "METRO-STD_METRO-STD_FORWARD",
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
                var sum1 = parseInt(localFreight) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "METRO-STD_METRO-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);


            }


            if (MetroStd && MetroExp) {
                var localSlab = MetroStd.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var localSlabExpress = MetroExp.split('/');
                const localFreightExpress = localSlabExpress[0];

                const localIncrementalFreightExpress = localSlabExpress[1];

                const obj = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_FORWARD",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: localFreightExpress,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreightExpress,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj);

                const dupli = {
                    billing_zone_code: "METRO-STD_METRO-STD_FORWARD",
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

                var sum1 = parseInt(localFreightExpress) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreightExpress,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                const dupli1 = {
                    billing_zone_code: "METRO-STD_METRO-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);


            }

            if (ROIStd && !ROIExp) {
                var localSlab = ROIStd.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_FORWARD",
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
                    billing_zone_code: "ROI-STD_ROI-STD_FORWARD",
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

                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);

                const obj1 = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "ROI-STD_ROI-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);


            }

            if (!ROIStd && ROIExp) {
                var localSlab = ROIExp.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_FORWARD",
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
                    billing_zone_code: "ROI-STD_ROI-STD_FORWARD",
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
                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "ROI-STD_ROI-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);

            }

            if (ROIStd && ROIExp) {
                var localSlab = ROIStd.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var localSlabExpress = ROIExp.split('/');
                const localFreightExpress = localSlabExpress[0];

                const localIncrementalFreightExpress = localSlabExpress[1];

                const obj = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_FORWARD",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: localFreightExpress,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreightExpress,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj);

                const dupli = {
                    billing_zone_code: "ROI-STD_ROI-STD_FORWARD",
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

                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                var sum1 = parseInt(localFreightExpress) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreightExpress,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "ROI-STD_ROI-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);

            }


            if (NEJKStd && !NEJKExp) {
                var localSlab = NEJKStd.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_FORWARD",
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
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_FORWARD",
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
                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);


            }

            if (!NEJKStd && NEJKExp) {
                var localSlab = NEJKExp.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                const obj = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_FORWARD",
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
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_FORWARD",
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

                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);
                const obj1 = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);

            }


            if (NEJKStd && NEJKExp) {
                var localSlab = NEJKStd.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var localSlabExpress = NEJKExp.split('/');
                const localFreightExpress = localSlabExpress[0];

                const localIncrementalFreightExpress = localSlabExpress[1];

                const obj = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_FORWARD",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: localFreightExpress,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreightExpress,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj);

                const dupli = {
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_FORWARD",
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
                var sum1 = parseInt(localFreightExpress) + parseInt(rvp_slab);
                var sum2 = parseInt(localFreight) + parseInt(rvp_slab);

                const obj1 = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum1,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreightExpress,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(obj1);

                const dupli1 = {
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_RVP",
                    based_on: "WEIGHT",
                    from: 0,
                    to: incremental_weight_slab,
                    slab_freight: sum2,
                    incremental_weight_slab: incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"
                };
                data.push(dupli1);

            }
// RTO
            if (LocalStdRto) {
                var localSlab = LocalStdRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                var obj = {
                    billing_zone_code: "LOCAL-STD_LOCAL-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "LOCAL-EXP_LOCAL-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);
            }
            
            if (LocalExpRto) {
                var localSlab=LocalExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                var obj = {
                    billing_zone_code: "LOCAL-STD_LOCAL-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "LOCAL-EXP_LOCAL-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);
            }
            
            if (ZonalExpRto) {
                var localSlab=ZonalExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                var obj = {
                    billing_zone_code: "ZONAL-STD_ZONAL-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);
            }
            
            if (ZonalStdRto) {
                var localSlab=ZonalStdRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                var obj = {
                    billing_zone_code: "ZONAL-STD_ZONAL-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "ZONAL-EXP_ZONAL-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);
            }
            
            if (MetroStdRto && !MetroExpRto) {

                var localSlab=MetroStdRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                var obj = {
                    billing_zone_code: "METRO-STD_METRO-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);
            }
            
            if (!MetroStdRto && MetroExpRto) {

                var localSlab=MetroExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];

                var obj = {
                    billing_zone_code: "METRO-STD_METRO-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);

               
            }

             if(MetroStdRto&&MetroExpRto)
             {

                var localSlab=MetroExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var StdSlab=MetroStdRto.split('/');
                const StdFreight = StdSlab[0];

                const stdIncrementalFreight = StdSlab[1];


                var obj = {
                    billing_zone_code: "METRO-STD_METRO-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:StdFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: stdIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "METRO-EXP_METRO-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);

             }

             if(!ROIStdRto&&ROIExpRto)
             {
                var localSlab=ROIExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var obj = {
                    billing_zone_code: "ROI-STD_ROI-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);
             }

             if(ROIStdRto&&!ROIExpRto)
             {

                var localSlab=ROIStdRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var obj = {
                    billing_zone_code: "ROI-STD_ROI-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);

             }

             if(ROIStdRto&&ROIExpRto)
             {

                var localSlab=ROIExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var StdSlab=ROIStdRto.split('/');
                const StdFreight = StdSlab[0];

                const stdIncrementalFreight = StdSlab[1];


                var obj = {
                    billing_zone_code: "ROI-STD_ROI-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:StdFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: stdIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "ROI-EXP_ROI-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);
             }

             if(!NEJKStdRto&&NEJKExpRto)
             {
                var localSlab=NEJKExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var obj = {
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);



             }

             if(NEJKStdRto&&!NEJKExpRto)
             {

                var localSlab=NEJKStdRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var obj = {
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);

             }

             if(NEJKStdRto&&NEJKExpRto)
             {

                var localSlab=NEJKExpRto.split('/');
                const localFreight = localSlab[0];

                const localIncrementalFreight = localSlab[1];


                var StdSlab=NEJKStdRto.split('/');
                const StdFreight = StdSlab[0];

                const stdIncrementalFreight = StdSlab[1];


                var obj = {
                    billing_zone_code: "NE J&K-STD_NE J&K-STD_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:StdFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight: stdIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj);

                var obj1 = {
                    billing_zone_code: "NE J&K-EXP_NE J&K-EXP_RTO",
                    based_on: "WEIGHT",
                    from: 0,
                    to:incremental_weight_slab,
                    slab_freight:localFreight,
                    incremental_weight_slab:incremental_weight_slab,
                    incremental_freight:  localIncrementalFreight,
                    service_type: "default",
                    order_type: "default"       
                };
                data.push(obj1);

             }

            

            if (data.length > 0) {
                const headers = Object.keys(data[0]);
                sheet.addRow(headers);

                data.forEach(row => {
                    sheet.addRow(Object.values(row));
                });

                // Save the workbook
                const filePath = 'C:\\Users\\parth\\Downloads\\nonLargeRateCard.xlsx'; // Update file path
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


