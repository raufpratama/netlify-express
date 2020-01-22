const express = require('express')
const app = express();
const sgMail = require('@sendgrid/mail')
const bodyParse = require('body-parser')
const cors = require('cors')

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))
app.use(cors())

sgMail.setApiKey('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');

app.post('/send_email', (req, res) => {
    let email_data = {
        to:'rauf@eatsyapp.co',
        from:req.body.from,
        subject: 'Sent from client',
        text:req.body.message,
        name:req.body.name,
        phone_number:req.body.phone_number,
        restaurant_name:req.body.restaurant_name,
        message:req.body.message
    }
    const msg = {
        to: email_data.to,
        from: email_data.from,
        subject: email_data.from,
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Name : </strong> ${email_data.name} <br/><br/>
                <strong>Restaurant Name :</strong> ${email_data.restaurant_name}<br/><br/>
                <strong>Phone Number :</strong> ${email_data.phone_number}<br/><br/>
                <stronng>Message :</stronng> ${email_data.message}`
    };
    sgMail.send(msg,null,(err)=>{
        if(err) {
            console.log('ada error ' + err)
        } else {
            console.log('berhasil')
            res.send(JSON.stringify({message:"berhasil",status:200}))
        }
    })
})

app.listen(4000, () => console.log(`listening to port 4000`))