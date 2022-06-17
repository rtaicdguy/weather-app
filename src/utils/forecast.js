const request=require('request')


forecast=(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=7157f01f1b30f09e2c20a9c73df3d91d&query='+latitude+','+longitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (response.body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,response.body.current.temperature+" Degree Celcius at "+response.body.location.name)
        }
})

}

module.exports=forecast