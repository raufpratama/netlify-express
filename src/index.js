const express = require('express')
const app = express();
const sgMail = require('@sendgrid/mail')
const bodyParse = require('body-parser')
const serverless = require('serverless-http')
const cors = require('cors')
const router = express.Router();
const APIS = require('../util/api')
const corsOptions = require('../util/cors.config')
require('dotenv').config()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: true}))
app.use(cors())

sgMail.setApiKey(process.env.SG_EATSY_API_KEY)

router.post('/send_email/merchant_application', (req, res) => {
    let email_data = {
        to: 'rauf@eatsyapp.co',
        from: req.body.from,
        subject: 'Sent from client',
        text: req.body.message,
        name: req.body.name,
        phone_number: req.body.phone_number,
        restaurant_name: req.body.restaurant_name,
        message: req.body.message
    }
    const msg = {
        to: email_data.to,
        from: email_data.from,
        subject: email_data.from,
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Name : </strong> ${email_data.name} <br/><br/>
                <strong>Restaurant Name :</strong> ${email_data.restaurant_name}<br/><br/>
                <strong>Phone Number :</strong> ${email_data.phone_number}<br/><br/>
                <strong>Message :</strong> ${email_data.message}`
    };
    sgMail.send(msg, null, (err) => {
        if (err) {
            res.send({message: "gagall", status: 401,err})
            console.log('ada error ' + err)
        } else {
            console.log('berhasil')
            res.send({message: "berhasil", status: 200})
        }
    })
})

router.post('/send_email/job_application', (req, res) => {
    let email_data = {
        to: 'rauf@eatsyapp.co',
        from: req.body.from,
        subject: 'Job Application',
        role:req.body.role,
        email:req.body.email,
        name: req.body.name,
        message: req.body.message
    }
    const msg = {
        to: email_data.to,
        from: email_data.from,
        subject: email_data.subject,
        text: 'Job Application',
        html: `<strong>Role : </strong> ${email_data.role} <br/><br/>
                <strong>Name : </strong> ${email_data.name} <br/><br/>
                <strong>Email : </strong> ${email_data.email} <br/><br/>
                <strong>Message :</strong> ${email_data.message}`
    };
    sgMail.send(msg, null, (err) => {
        if (err) {
            res.send({message: "gagal", status: 401,err})
            console.log('ada error ' + err)
        } else {
            console.log('berhasil')
            res.send({message: "berhasil", status: 200})
        }
    })
})

router.get('/ok', (req, res) => {
    res.json({message: "halo dunia"})
})

router.get('/', (req, res) => {
    res.json({message: "halo world"})
})

app.use('/.netlify/functions/index', router)

app.listen(9000, () => console.log(`listening to port 9000`))

module.exports.handler = serverless(app)