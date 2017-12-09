const fetch = require ('node-fetch')
const result = 
    fetch('https://vatapit.com/v1/country-code-check?code=DE', {
        'Apikey'
    })
    .then(response => response.text)
