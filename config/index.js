var configValues = require("./config.json")
module.exports = {
    getDbConnectionString: ()=>{
        return `mongodb://${configValues.username}:${ configValues.password}@ds163232.mlab.com:63232/nodetodos`
    }
}
