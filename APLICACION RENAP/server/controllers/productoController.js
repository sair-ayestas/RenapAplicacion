const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {

    try {
        let producto;

        // Creamos nuestro producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarProducto = async (req, res) => {

    try {
        const { codigo,nombre,apellido,nacionalidad,genero,fecha_nacimiento,lugar_nacimiento,vecindad,pueblo,com_lugui,estado_civil,fecha_vencimiento } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el DPI' })
        }
        producto.codigo = codigo;
        producto.nombre = nombre;
        producto.apellido = apellido;
        producto.nacionalidad = nacionalidad;
        producto.genero = genero;
        producto.fecha_nacimiento = fecha_nacimiento;
        producto.lugar_nacimiento = lugar_nacimiento;
        producto.vecindad = vecindad;
        producto.pueblo = pueblo;
        producto.com_lugui = com_lugui;
        producto.estado_civil = estado_civil;
        producto.fecha_vencimiento = fecha_vencimiento;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id },producto, { new: true} )
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el DPI' })
        }
       
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}