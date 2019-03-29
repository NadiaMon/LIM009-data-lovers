//const dataSteam = STEAM.appnews.newsitems;
const nuevaData = steam.dataMuestra(dataSteam); //nueva data filtrada
const filtrarCategorias = steam.categorias(dataSteam); /*aqui llamo a mi data*/
const mostrarData = document.getElementById("pantalla-muestra"); /*section donde se imprimira la data*/
const nombreFecha = document.getElementById("ordenar-fecha");

const noticiaTemplate = (data) => {//data = [{url, titulo, contenido}, {}, {}]
  let news = "";
  for (let i = 0; i < data.length-5; i++) { //recorre toda la data
    let item = `
      <div>
      <h1>${data[i].title}</h1>
      <a href="">${data[i].url}</a>
      <p>${data[i].contents}</p>
      </div>
      `
      ;
    news += item;
  }
  return news;
};

mostrarData.innerHTML = noticiaTemplate(nuevaData);

/*funcion para el boton de filtrado*/

/*
const llamadoFiltrado = (condicion) => {
  let nombre = steam.categorias(dataSteam);
  let item = "";
  for (let i = 0; i < nombre[condicion].length; i++) {
    let items = `
          <div>
          <h1>${nombre[condicion][i].title}</h1>
          <p>${nombre[condicion][i].url}</p>
          <p>${nombre[condicion][i].contents}</p> 
          <p>${nombre[condicion][i].author}</p> 
          <p>${nombre[condicion][i].feedlabel}</p>     
          </div>
          `
      ;
    item += items

  }
  return item;
}

const btnProducto = document.getElementById("btn-product");
btnProducto.addEventListener("click", () => {

  mostrarData.innerHTML = llamadoFiltrado("producto");
});

const btnGamer = document.getElementById("btn-gamer");
btnGamer.addEventListener("click", () => {

  mostrarData.innerHTML = llamadoFiltrado("gamer");
});

const btnEuro = document.getElementById("btn-euro");
btnEuro.addEventListener("click", () => {

  mostrarData.innerHTML = llamadoFiltrado("euro");
});

const btnBlog = document.getElementById("btn-blog");
btnBlog.addEventListener("click", () => {

  mostrarData.innerHTML = llamadoFiltrado("blog");
});

const btnRock = document.getElementById("btn-rock");
btnRock.addEventListener("click", () => {

  mostrarData.innerHTML = llamadoFiltrado("rock");
});
*/

const pintarGeneral = (boton, condicion) => {
  const btn = document.getElementById(boton);
  btn.addEventListener("click", () => {
    let nombre = steam.categorias(dataSteam);
    let items = "";
    for (let i = 0; i < nombre[condicion].length; i++) {
      let item = `
          <div>
          <h1>${nombre[condicion][i].title}</h1>
          <p>${nombre[condicion][i].url}</p>
          <p>${nombre[condicion][i].contents}</p>
          <p>${nombre[condicion][i].author}</p>
          <p>${nombre[condicion][i].feedlabel}</p>
          </div>
          `;
        items += item

    }
    mostrarData.innerHTML = items;

  });

};

pintarGeneral("btn-product", "producto");
pintarGeneral("btn-gamer", "gamer");
pintarGeneral("btn-euro", "euro");
pintarGeneral("btn-blog", "blog");
pintarGeneral("btn-rock", "rock");














