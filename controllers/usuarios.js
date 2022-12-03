const { response, request } = require('express');


//! ---------------  PETICIONES -------------------

//! --------------- Peticion GET  -----------------
const usuariosGet = (req=request , res = response) => {

    // const query =  req.query;

    const {q, nombre = 'No name', apikey, page=1, limit} = req.query;

    res.json({
        ok: true,
        msg: 'Get API Controlador',
        q,
        nombre,
        apikey,
        page,
        limit,
    });
}

//! --------------- Peticion POST  -----------------
const usuariosPost = (req, res = response) => {
    const {nombre, edad, dia} = req.body;

    res.json({
    
        msg: 'Post API usuariosControllers',
        // body
        nombre,
        edad,
        dia
    });
}

//! --------------- Peticion PUT  -----------------
const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'Put API usurariosPutControlador',
        id
    });
}

//! --------------- Peticion PATCH  -----------------
const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Patch API Controlador'
    });
}


//! --------------- Peticion DELETE  -----------------
const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Delete API Controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}



