const geocode = require('./geocode')
const forecast = require('./forecast')

const address  = process.argv[2]

if (!address){
    console.log('Please type in location')
} else {
    geocode( address , (error , {latitude, longitude  , location}) => {
        if (error){
            return   console.log(error)
        }

        forecast(latitude,  longitude , (error ,forecastData) => {

            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })

}

