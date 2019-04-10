const dataSteam = STEAM.appnews.newsitems;
const nuevaData = steam.dataMuestra(dataSteam); /* nueva data filtrada*/
const mostrarData = document.getElementById('pantalla-muestra'); /* section donde se imprimira la data*/
const orderBlog = document.getElementById('ordenar-fecha');

const noticiaTemplate = (data) => {/* data = [{title, url, content, date}, {}, {}]*/
  let news = '';
  for (let i = 0; i < data.length; i++) { /* recorre toda la data*/
    let item = `
      <div class="noticia">
        <h2><a href="${data[i].url}" target="_blank">${data[i].title}</a></h2>
        <p>${data[i].contents}</p>
        <p class="fecha">${new Date(data[i]['date'] * 1000)}</p>
      </div>
      `
      ;
    news += item;
  }
  return news;
};

mostrarData.innerHTML = noticiaTemplate(nuevaData);

/* funcion para el boton de filtrado*/

const pintarGeneral = (boton, category) => {
  const btn = document.getElementById(boton);
  btn.addEventListener('click', () => {
    let nombre = steam.categorias(dataSteam);
    let itemsHTML = '';
    for (let i = 0; i < nombre[category].length; i++) {
      let item = `
          <div class="noticia">
          <h2><a href="${nombre[category][i].url}" target="_blank">${nombre[category][i].title}</a></h2>
          <p>${nombre[category][i].contents}</p>
          <p class="fecha">${nombre[category][i].date}</p>
          <!--<p>${nombre[category][i].author}</p>
          <p>${nombre[category][i].feedlabel}</p>-->
          </div>
          `;
      itemsHTML += item;
    }
    mostrarData.innerHTML = `<h1>${category} (${nombre[category].length})</h1>` + itemsHTML;
  });
};

pintarGeneral('btn-product', 'producto');
pintarGeneral('btn-gamer', 'gamer');
pintarGeneral('btn-euro', 'euro');
pintarGeneral('btn-blog', 'blog');
pintarGeneral('btn-rock', 'rock');

/* función llamando ordenado*/

orderBlog.addEventListener('change', (event) => {
  let valorBtn = event.target.value;
  const fechasOrdenadas = steam.ordenandoFechas(nuevaData, valorBtn); /* función ordenado*/
  mostrarData.innerHTML = noticiaTemplate(fechasOrdenadas);
});

/* función cálculo matemático*/

const renderCategories = (elementId, categoriesFunction) => {
  const element = document.getElementById(elementId);
  element.addEventListener('click', () => {
    const categoriesHTML = categoriesFunction.map((categoryObj) => `
    <li>${categoryObj.title}-${categoryObj.percentage}%</li>
    `).join('');
    mostrarData.innerHTML = `<div><ul>${categoriesHTML}</ul></div>`;
  });
};

renderCategories('btnCategories', steam.computeCategoryStats(dataSteam));

/* Funcionalidad para mostrar el menú de categorías en pantallas pequeñas.*/

const burger = document.getElementById('burger');
const barraVertical = document.getElementById('barra-vertical');

burger.addEventListener('click', () => {
  barraVertical.classList.toggle('visible');
});