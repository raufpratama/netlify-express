const express = require('express')
const app = express();
const sgMail = require('@sendgrid/mail')
const bodyParse = require('body-parser')
const serverless = require('serverless-http')
const cors = require('cors')
const router = express.Router();
const APIS = require('../util/api')

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))
app.use(cors())

sgMail.setApiKey('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')

router.post('/send_email', (req, res) => {
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

router.get('/', (req, res) => {
    res.json({
        message:"halo dunia"
    })
})

app.use('/.netlify/functions/index',router)

app.listen(4000, () => console.log(`listening to port 4000`))

module.exports.handler = serverless(app)