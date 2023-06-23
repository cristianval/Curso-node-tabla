const fs = require('fs');
require('colors')




const creaArchivo = async(base = 5, listar = false, hasta = 10) =>{

    try {

    
      
            
            let salida ='';


            for (let i = 1; i <= hasta; i++) {
                salida += `${base} * ${i} = ${base * i}\n`;
            }
            if (listar) {

                console.log("====================".green);
                console.log(`Tabla del ${base}`.blue);
                console.log("====================".green);
                
            console.log(salida.bgYellow);
            }


            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            return `tabla-${base}.txt creado`;

        
    } catch (error) {
        throw err;
    }


}

module.exports = {
    creaArchivo
}