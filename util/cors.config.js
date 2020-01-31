let corsOptions = {
    origin: ['https://test-eatsyapp.netlify.com',/\.test-eatsyapp.netlify\.com$/,'https://eatsyapp.co/',/\.eatsyapp\.co$/,'http://localhost:3000','https://sendgrid.com'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// const whitelist = ['https://test-eatsyapp.netlify.com',/\.test-eatsyapp.netlify\.com$/,'https://eatsyapp.co/',/\.eatsyapp\.co$/,'http://localhost:3000']
// const corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// 

module.exports = corsOptions;