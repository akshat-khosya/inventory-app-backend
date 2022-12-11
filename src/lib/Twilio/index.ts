import config from "../config/default"
import log from "../logger";
class SMS{
    accountSid=config.get("ACCOUNTSID") as string;
    authToken=config.get("AUTHTOKEN") as string;
    client:any
    constructor(){
        this.client=require('twilio')(this.accountSid,this.authToken);
        log.info("Twilio client created");
    }
    async sendSMS(phone:string,otp:number){

        const message=await this.client.messages.create({
            body:`Your OTP is ${otp}`,
            from:'+13854626333',
            to:`+91${phone}`
        }).then((message:any)=>{
            return message;
        }).catch((err:any)=>{
            log.error(err);
            throw new Error("Error in sending SMS");
        });
    }
}

let sms=new SMS();
export default sms;