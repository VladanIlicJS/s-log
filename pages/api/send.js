import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async(req,res)=>{
    if(req.method==="POST"){
        const {email,message}=req.body
        const msg = {
            to: 'contact@slog.ai',
            from:'contact@slog.ai',
            subject: 'New request from landing page',
            text: `Email => ${email}`,
            message:`<strong>${message}</strong>`
        }
        try{
            await sgMail.send(msg)
            res.status(200).json({success:true})
        }catch(err){
            res.status(200).json({success:false})
            console.log(err)
        }
    }
}