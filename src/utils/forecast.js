
const { response } = require('express')
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=affdc7180865ef3f8f89cd13c0641fc6&query=' + latitude + ',' + longitude 
 
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }  else if (body.error) {
            callback('Unable to detect location', undefined)
        }  else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'
        )}
    })
}

module.exports = forecast