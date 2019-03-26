/* Manejo de data 

esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
*/

//const dataSteam = STEAM.appnews.newsitems;

/*

for(let i=0; i<dataSteam.length;i++){
    
    console.log(dataSteam[i]);
};

*/

//usando filter para separar data por canales
//creando función que agrupe el filtrado
/*

const categorias = () => {

    const filtrado = {};

    const productUpdate = dataSteam.filter((label) => {
        return (label.feedlabel === "Product Update");
    })

    filtrado.producto = productUpdate;

    const pcGamer = dataSteam.filter((gamer) => {
        return (gamer.feedlabel === "PC Gamer");
    })

    filtrado.gamer = pcGamer;

    const euroGamer = dataSteam.filter((euro) => {
        return (euro.feedlabel === "Eurogamer");
    })

    filtrado.euro = euroGamer;

    const tfBlog = dataSteam.filter((blog) => {
        return (blog.feedlabel === "TF2 Blog");
    })

    filtrado.blog = tfBlog;

    const rockPaperShotgun = dataSteam.filter((rock) => {
        return (rock.feedlabel === "Rock, Paper, Shotgun");
    })

    filtrado.rock = rockPaperShotgun;

    return filtrado;
}

window.categorias = categorias;

//timestamp convert




/*

const fechaconvertTimestamp = () => {

    for (i = 0; i < dataSteam.length; i++) {
        
        let convertir = new Date(date * 1000);
        console.log(convertir);
   }
}




console.log(new Date(1542738000 * 1000))
console.log(new Date(1540923360 * 1000))
console.log(new Date(1540923360 * 1000))
console.log(new Date(1540494720 * 1000))
console.log(new Date(1540494720 * 1000))
console.log(new Date(1540482175 * 1000))
console.log(new Date(1540464693 * 1000))
console.log(new Date(1540295862 * 1000))
console.log(new Date(1540254060 * 1000))
console.log(new Date(1540254060 * 1000))


// const fechaconvertTimestamp = () => {

//     const nuevaFecha = {};
//     for (x = 0; dataSteam.length; x++) {
//         return (new Date(dataSteam[i].date * 1000))

//         nuevaFecha.fecha = fechaconvertTimestamp;
//     }
//      return nuevaFecha

// }

//para ordenar la data por fechas de manera ascendente

const fechasAscendente = dataSteam.sort((a,b) => {
    let dateA = new Date((a.date) * 1000); //convertir el timestamp a milisegundos
    let dateB = new Date((b.date) * 1000);

    return dateA - dateB;

})

console.log(fechasAscendente);

//para ordenar la data por fechas de manera ascendente

const fechasDescendente = dataSteam.sort((a,b) => {
    let dateA = new Date((a.date) * 1000);
    let dateB = new Date((b.date) * 1000);

    return dateB - dateA;

})

console.log(fechasDescendente);

//ordenar los títulos

const ordenandoTitulos = dataSteam.sort((a,b) => {
    let dateA = new Date((a.date) * 1000);
    let dateB = new Date((b.date) * 1000);

    return dateB - dateA;

})

console.log(fechasDescendente);

*/

