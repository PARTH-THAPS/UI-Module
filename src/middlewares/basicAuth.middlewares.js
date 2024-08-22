const basicAuthorizer=(req,res,next)=>{

const authHeader= req.headers("authorization");    


if(!authHeader){
return res.status(401).send("No Authorization details found");
}



//extract credentials
const base64Credentials= authHeader.replace('Basic','');
console.log(base64Credentials);


//decode credentials

const decodedCreds= Buffer.from(base64Credentials,'base64').toString('utf8');
console.log(decodedCreds);

const creds=decodedCreds.split(',');

}