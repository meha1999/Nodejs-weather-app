const request = require("postman-request");

const weather = (lat, lon,callback) => {
  const url =
    "http://api.weatherstack.com/current";

  const queryString = {
    access_key: "768ee1b476739c5afc1649ffe0922b8e",
    query: `${lat},${lon}`,
  };

  request(url, { json: true, qs: queryString },(error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. And it feels like ' + body.current.feelslike + ' degress.')
    }
});
};

module.exports=weather