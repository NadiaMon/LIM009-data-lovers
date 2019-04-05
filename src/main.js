//const dataSteam = STEAM.appnews.newsitems;
const nuevaData = steam.dataMuestra(dataSteam); //nueva data filtrada
const filtrarCategorias = steam.categorias(dataSteam); /*aqui llamo a mi data*/
const mostrarData = document.getElementById("pantalla-muestra"); /*section donde se imprimira la data*/
const orderBlog = document.getElementById("ordenar-fecha");

const noticiaTemplate = (data) => {//data = [{title, url, content, date}, {}, {}]
  let news = "";
  for (let i = 0; i < data.length; i++) { //recorre toda la data
    let item = `
      <div>
      <h1>${data[i].title}</h1>
      <a href="">${data[i].url}</a>
      <p>${data[i].contents}</p>
      <p>${data[i].date}</p>
      </div>
      `
      ;
    news += item;
  }
  return news;
};

mostrarData.innerHTML = noticiaTemplate(nuevaData);

/*funcion para el boton de filtrado*/

const pintarGeneral = (boton, category) => {
  const btn = document.getElementById(boton);
  btn.addEventListener("click", () => {
    let nombre = steam.categorias(dataSteam);
    let itemsHTML = "";
    for (let i = 0; i < nombre[category].length; i++) {
      let item = `
          <div>
          <h2>${nombre[category][i].title}</h2>
          <p>${nombre[category][i].url}</p>
          <p>${nombre[category][i].contents}</p>
          <p>${nombre[category][i].author}</p>
          <p>${nombre[category][i].feedlabel}</p>
          </div>
          `;
          itemsHTML += item

    }
    mostrarData.innerHTML = `<h1>${category} (${nombre[category].length})</h1>` + itemsHTML;

  });

};

pintarGeneral("btn-product", "producto");
pintarGeneral("btn-gamer", "gamer");
pintarGeneral("btn-euro", "euro");
pintarGeneral("btn-blog", "blog");
pintarGeneral("btn-rock", "rock");

/*función llamando ordenado*/

orderBlog.addEventListener("change", (event) => {
  let valorBtn = event.target.value;
  const fechasOrdenadas = ordenandoFechas(nuevaData, valorBtn); /*función ordenado*/
  mostrarData.innerHTML = noticiaTemplate(fechasOrdenadas);

});

/*función cálculo matemático*/

const renderCategories = (elementId, categories) => {

const element = document.getElementById(elementId)
const categoriesHTML = categories.map((categoryObj) => `
<li>${categoryObj.title}-${categoryObj.percentage}%</li>
`).join("")

element.innerHTML = `<ul>${categoriesHTML}</ul>`;
}

renderCategories("categories", computeCategoryStats(dataSteam));




  













