const { error } = require('console')
const os = require ('os')
module.exports.getData = async ()=>{
   try {
        const osInformation = {
        hostname : os.hostname(),
        platform : os.platform(),
        release: os.release(),
    type: os.type(),

        }
        if (!osInformation){
            throw new Error ('osInformation not found')
        }
        console.log(osInformation)
        return osInformation
    } catch (error) {
throw new Error ('Erreur lors de la recuperation des osInf')    }
}