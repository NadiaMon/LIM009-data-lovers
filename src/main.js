//const dataSteam = STEAM.appnews.newsitems;
const nuevaData = steam.dataMuestra(dataSteam); //nueva data filtrada
const filtrarCategorias = steam.categorias(dataSteam); /*aqui llamo a mi data*/
const mostrarData = document.getElementById("pantalla-muestra"); /*section donde se imprimira la data*/
const orderBlog = document.getElementById("ordenar-fecha");

const noticiaTemplate = (data) => {//data = [{title, url, content, date}, {}, {}]
  let news = "";
  for (let i = 0; i < data.length; i++) { //recorre toda la data
    let item = `
      <div class="noticia">
      <h2><a href="${data[i].url}"target="_blank">${data[i].title}</a></h2>
      <p class="noticia-p> ${data[i].contents}</p>
      <p class="noticia-p>${data[i].date}</p>
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
*/

const pintarGeneral = (boton, condicion) => {
  const btn = document.getElementById(boton);
  btn.addEventListener("click", () => {
    let nombre = steam.categorias(dataSteam);
    let items = "";
    for (let i = 0; i < nombre[condicion].length; i++) {
      let item = `
          <div class="noticia">
          <h2><a href="${nombre[condicion][i].url}" target="_blank">${nombre[condicion][i].title}</a></h2>
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

/*funcion para mostrar el menu de categorias en pantalla pequeña*/
const burger = document.getElementById("burger");
const barraVertical = document.getElementById("barra-vertical");

burger.addEventListener("click",() =>{
  barraVertical.classList.toggle("visible");
})

/*función llamando ordenado*/

orderBlog.addEventListener("change", (event) => {

  let valorBtn = event.target.value;
  const fechasOrdenadas = ordenandoFechas(nuevaData, valorBtn);
  mostrarData.innerHTML = noticiaTemplate(fechasOrdenadas);

});





  













