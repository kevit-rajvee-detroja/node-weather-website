
const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://geocode.maps.co/search?q='+ address

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the services!', undefined)
        }  else if (body.length === 0) {
            callback('Unable to detect location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location: body[0].display_name
            })
        }
    })
}

module.exports = geocode