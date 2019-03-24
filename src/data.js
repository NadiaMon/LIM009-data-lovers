/* Manejo de data 

esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
*/

const dataSteam = STEAM.appnews.newsitems;

/*

for(let i=0; i<dataSteam.length;i++){
    
    console.log(dataSteam[i]);
};

*/

//usando filter para separar data por canales
//creando función que agrupe el filtrado

const categorias = () => {

  const filtrado = {}

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

const fechaconvertTimestamp = (arr) => {

    for (i = 0; i < arr.length; i++) {
        let fecha = arr[i]["date"];
        let convertir = (fecha * 1000);

    }
    


}

// console.log(new Date(1540254060 * 1000));








