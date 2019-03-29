//const dataSteam = STEAM.appnews.newsitems;
const nuevaData = steam.dataMuestra(dataSteam); //nueva data filtrada
const filtrarCategorias = steam.categorias(dataSteam); //aqui llamo a mi data
const mostrarData = document.getElementById("pantalla-muestra");  //section donde se imprimira la data

const noticiaTemplate = (data) => {//data = [{url, titulo, contenido}, {}, {}]
  let news = "";
  for (let j = 0; j < data.length - 5; j++) { //recorre toda la data
    let item = `
      <div>
      <h1>${data[j].title}</h1>
      <a href="">${data[j].url}</a>
      <p>${data[j].contents}</p>
      </div>
      `
      ;
    news += item;
  }
  return news;
};

mostrarData.innerHTML = noticiaTemplate(nuevaData);

/*funcion para el boton de filtrado*/

const product= ()=>{
    let nombre = steam.categorias(dataSteam);
    let productos = '';
    for (let i = 0; i < nombre.producto.length; i++) {
      let producto = `
          <div>
          <h1>${nombre.producto[i].title}</h1>
          <p>${nombre.producto[i].url}</p>
          <p>${nombre.producto[i].contents}</p> 
          <p>${nombre.producto[i].author}</p> 
          <p>${nombre.producto[i].feedlabel}</p>     
          </div>
          `
        ;
        productos += producto
       
    }
    return productos;
    }


const btnProducto = document.getElementById("btn-product");
btnProducto.addEventListener("click", () =>{
    
   mostrarData.innerHTML = product();
});






/*
const btnProducto = document.getElementById("btn-product");
btnProducto.addEventListener("click", () =>{  
    let nombre = steam.categorias(dataSteam);
    let productos = '';
    for (let i = 0; i < nombre.producto.length; i++) {
      let producto = `
          <div>
          <h1>${nombre.producto[i].title}</h1>
          <p>${nombre.producto[i].url}</p>
          <p>${nombre.producto[i].contents}</p> 
          <p>${nombre.producto[i].author}</p> 
          <p>${nombre.producto[i].feedlabel}</p>     
          </div>
          `;
        productos += producto
        mostrarData.innerHTML = productos;         
    }
});

*/


/*
const pintarGeneral = (boton) => {
  const btn = document.getElementById(boton);
  btn.addEventListener("click", () => {
    let nombre = steam.categorias(dataSteam);
    let items = '';
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
    mostrarData.innerHTML = 'hola';

  });

};

pintarGeneral("'btn-product'");













const btnGamer = document.getElementById("btn-gamer");
btnGamer.addEventListener("click", () => { //esto es un evento
  let items;
  let nombre = steam.categorias(dataSteam);
  for (let i = 0; i < nombre.gamer.length; i++) {
    let item = `
        <div>
        <h1>${nombre.gamer[i].title}</h1>
        <p>${nombre.gamer[i].url}</p>
        <p>${nombre.gamer[i].contents}</p>
        <p>${nombre.gamer[i].author}</p>
        <p>${nombre.gamer[i].feedlabel}</p>     
        </div>
        `      ;
    items += item
    mostrarData.innerHTML = items;
  }

})

const btnEuro = document.getElementById("btn-euro");
btnEuro.addEventListener("click", () => {

  let nombre = steam.categorias(dataSteam);

  for (let i = 0; i < nombre.euro.length; i++) {
    mostrarData.innerHTML += `
        <div>
        <h1>${nombre.euro[i].title}</h1>
        <p>${nombre.euro[i].url}</p>
        <p>${nombre.euro[i].contents}</p>
        <p>${nombre.euro[i].author}</p>
        <p>${nombre.euro[i].feedlabel}</p>     
        </div>
        `
      ;
    // return nombre.euro[i];
    console.log(nombre.euro[i])
  }

})

const btnBlog = document.getElementById("btn-blog");
btnBlog.addEventListener("click", () => {

  let nombre = steam.categorias(dataSteam);

  for (let i = 0; i < nombre.blog.length; i++) {
    mostrarData.innerHTML += `
        <div>
        <h1>${nombre.blog[i].title}</h1>
        <p>${nombre.blog[i].url}</p>
        <p>${nombre.blog[i].contents}</p>
        <p>${nombre.blog[i].author}</p>
        <p>${nombre.blog[i].feedlabel}</p>     
        </div>
        `
      ;
    // return nombre.gamer[i];
    console.log(nombre.blog[i])
  }

})

const btnRock = document.getElementById("btn-rock");
btnRock.addEventListener("click", () => {

  let nombre = steam.categorias(dataSteam);

  for (let i = 0; i < nombre.rock.length; i++) {
    mostrarData.innerHTML += `
        <div>
        <h1>${nombre.rock[i].title}</h1>
        <p>${nombre.rock[i].url}</p>
        <p>${nombre.rock[i].contents}</p>
        <p>${nombre.rock[i].author}</p>
        <p>${nombre.rock[i].feedlabel}</p>     
        </div>
        `
      ;
    // return nombre.gamer[i]
    console.log(nombre.rock[i])
  }

})

*/
