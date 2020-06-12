const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    if(!Number(base)){
        console.log(`La base introducida "${base}" no es un número`);
        return;
    }
    if(!Number(limite)){
        console.log(`El límite introducido "${base}" no es un número`);
        return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    console.log('=============================='.green);
    console.log(`=== tabla de ${base} ===`.green);
    console.log('=============================='.green);
    console.log(data);


};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`La base introducida "${base}" no es un número`);
            return;
        }
        if(!Number(limite)){
            reject(`El límite introducido "${base}" no es un número`);
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`./tablas/tabla-${base}-lim-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tablas/tabla-${base}-lim-${limite}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla,
}

