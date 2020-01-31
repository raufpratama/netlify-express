let corsOptions = {
    origin: ['https://test-eatsyapp.netlify.com',/\.test-eatsyapp.netlify\.com$/,'https://eatsyapp.co',/\.eatsyapp\.co$/],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = corsOptions;