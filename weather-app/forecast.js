const request = require('request')

const forecast = (latitude ,longitude , callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=896f477f1cd7fb5e19e622c8a0f2a750&query= '+ latitude +','+ longitude+'units=f'

    request({url ,json:true} , (error ,{ body }) => {
        if (error){
            callback('Unable to connect to web services' , undefined)
        } else if(body.error){
            callback('Wrong details for latitude and longitude' , undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] + ' . it is currently ' + body.current.temperature + ' degrees out . It feels like ' + body.current.feelslike + ' degrees out')
        }
    })
}

module.exports = forecast