const empleado = require('../model/Empleado');

module.exports.mostrar = (req, resp) => {
    empleado.find({}, (error, empleados)=> {
        if(error) {
            return res.status(500).json({
                message: 'Error al mostrar los empleados' 
            });
        }
        console.log(empleados);
    })
}

