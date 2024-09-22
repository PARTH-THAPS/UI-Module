import {spawn} from 'child_process';
import notifier from 'node-notifier';

export class uatController {

    static formCollect = (req, res) => {
        res.render('UatCreationForm',{userEmail:req.session.userEmail});
    }
    static submitData=(req,res)=>
    {   
        var formDataArray=[];
       var {rate_card_name}=req.body;

       const merchant_names =rate_card_name.split(',');
       
       const pythonProcess = spawn('python', ['Public/Script/uatCreation.py', JSON.stringify(merchant_names)]);

       pythonProcess.stdout.on('data', (data) => {
           console.log(`Python script output: ${data}`);
       });

       pythonProcess.stderr.on('data', (data) => {
           console.error(`Error in Python script: ${data}`);
       });

       pythonProcess.on('close', (code) => {
        notifier.notify({
            title: 'Script Completed',
            message: 'Script execution has completed successfully please download the data.',
        });
       });
        
    }
}
