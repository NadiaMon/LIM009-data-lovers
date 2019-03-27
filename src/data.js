const dataSteam = STEAM.appnews.newsitems;

const dataMuestra = (data) => { //nuevo data para mostrar
   const arr = [];
   for (let i = 0; i < data.length; i++) {
       arr.push({title: data[i].title, url: data[i].url, contents: data[i].contents});
   }
   return arr;
}

//filtrado dentro de una función
const categorias = (data) => { //data = [{ }, { }]

   const filtrado = {};

   const productUpdate = data.filter((label) => { //usando filter para separar data por canales
       return (label.feedlabel === "Product Update");
   })

   filtrado.producto = productUpdate; //propiedad:value que se agregan a filtrado

   const pcGamer = data.filter((gamer) => {
       return (gamer.feedlabel === "PC Gamer");
   })

   filtrado.gamer = pcGamer;

   const euroGamer = data.filter((euro) => {
       return (euro.feedlabel === "Eurogamer");
   })

   filtrado.euro = euroGamer;

   const tfBlog = data.filter((blog) => {
       return (blog.feedlabel === "TF2 Blog");
   })

   filtrado.blog = tfBlog;

   const rockPaperShotgun = data.filter((rock) => {
       return (rock.feedlabel === "Rock, Paper, Shotgun");
   })

   filtrado.rock = rockPaperShotgun;

   return filtrado;
}

//creando una función que devuelva la fecha de cada noticia
//fórmula para convertir timestamp new Date(x*1000)
/*

const fechaconvertTimestamp = (data) => { //data = parametro

   for (let i = 0; i < data.length; i++) {
       let convertir = new Date(data[i].date * 1000); //propiedad date de cada objeto
       console.log(convertir);
   }
}

console.log(fechaconvertTimestamp(dataSteam));
*/


/*
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
*/


/*
const fechas = dataSteam.sort((a,b) => {
   let dateA = new Date((a.date) * 1000); //convertir el timestamp a milisegundos
   let dateB = new Date((b.date) * 1000);

   if(dateA > dateB){
       return 1;
   }
   if(dateA < dateB){
       return -1;
   }

   return 0;
})
*/




/*
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





/*
//ordenar los títulos

const ordenandoTitulos = dataSteam.sort((a,b) => {



   let dateA = new Date((a.date) * 1000);
   let dateB = new Date((b.date) * 1000);

   return dateB - dateA;

})

console.log(fechasDescendente);

*/


window.steam = {  //objeto que contiene todos los métodos
    categorias: categorias,
    //fechaconvertTimestamp: fechaconvertTimestamp,
    dataMuestra: dataMuestra

}
