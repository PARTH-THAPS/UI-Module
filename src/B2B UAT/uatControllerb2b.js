import { spawn } from 'child_process';
import notifier from 'node-notifier';

export class uatControllerb2b {

    static formCollect = (req, res) => {
        res.render('UatCreationFormb2b',{userEmail:req.session.userEmail});
    }

    static submitData = (req, res) => {   
        const { rate_card_name } = req.body;
        const merchant_names = rate_card_name.split(',');
        console.log(merchant_names);

        const pythonProcess = spawn('python3', ['Public/Script/b2bUatCreation.py', ...merchant_names]);

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
