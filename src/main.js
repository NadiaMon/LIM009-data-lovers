const filtrarCategorias= steam.categorias(dataSteam); //[{}]//devuelve un objeto donde cada atributo es un array no noticias por categoria
const mostrarData = document.getElementById("pantalla-muestra");  //section donde se imprimira la data
const nombreFecha= document.getElementById("ordenar-fecha");
let noticiasMostradas = [];

//El pedacito de html de la noticia a mostrar
const noticiaTemplate = (data) =>{//data = [{url, titulo, contenido}, {}, {}]
    let item = `
        <div id="noticia">
            <a href="${data.url}" target="_blank" class="titulo-noticia">${data.title}</a>
            <p>${data.author}</p>
            <p>${data.contents}</p>
        </div>
    `;

    return item;
};

const mostrarNoticiasOrdenado = (noticias) => {
    //variable para guardar las noticiar ordenadas por fecha para luwego mostrarlas
    let noticiasOrden = [];
      
    //nombreFecha.value devuelve el valor del desplegable en el html
    //verificar el tipo de orden por hacer
    if (nombreFecha.value == 'opcion1') {
        //ordenar de recientes
        noticiasOrden = steam.fechasDescendente(noticias)
    }
    else {
         //ordenar de pasada
         noticiasOrden = steam.fechasAscendente(noticias)
    }
    pintarNoticias(noticiasOrden);
}

nombreFecha.addEventListener("change",()=>{
   mostrarNoticiasOrdenado(noticiasMostradas)
})

//funcion para el boton de filtrado
const pintarNoticias = (noticias) => {
    noticiasMostradas = noticias;
    //elimina las  noticias anteriores y me muestra las que selecciono
    mostrarData.innerHTML = "";

    //por cada noticia
    for (let i = 0; i < noticias.length; i++){
        //obtiene el html de la noticia
        const noticia = noticiaTemplate(noticias[i])

        //pinta el html En la pagina 
        //inserta el html de la noticia al final de la pagina
        mostrarData.insertAdjacentHTML('beforeend', noticia);
    }
}

//primera carga
const init = () => {
    mostrarNoticiasOrdenado(dataSteam);
}

const btnProducto = document.getElementById("btn-product");

btnProducto.addEventListener("click", () => {
    mostrarNoticiasOrdenado(filtrarCategorias.producto);
})

const btnGamer = document.getElementById("btn-gamer");
btnGamer.addEventListener("click", () => {
    mostrarNoticiasOrdenado(filtrarCategorias.gamer);
})


const btnEuro = document.getElementById("btn-euro");
btnEuro.addEventListener("click", () => {
    mostrarNoticiasOrdenado(filtrarCategorias.euro);
})

const btnBlog = document.getElementById("btn-blog");
btnBlog.addEventListener("click", () => {
    mostrarNoticiasOrdenado(filtrarCategorias.blog);
})

const btnRock = document.getElementById("btn-rock");
btnRock.addEventListener("click", () => {
    mostrarNoticiasOrdenado(filtrarCategorias.rock);
})

init();



 

 
