const fs = require('fs')
const path = require('path')


module.exports = (req,res,next) => {
    fs.appendFileSync(path.join(__dirname,'..','data','userLogs.txt'),`El husuario ingreso a la ruta: ${req.url}\n`) //para registrar las visitas de los usuarios // dentro del `` colo camos que es lo que queremos guardar

    next()
}