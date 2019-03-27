const filtrarCategorias= steam.categorias(dataSteam); //devuelve un objeto donde cada atributo es un array no noticias por categoria
const mostrarData = document.getElementById("pantalla-muestra");  //section donde se imprimira la data

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
//funcion para el boton de filtrado

const pintarNoticias = (noticias) => {
    //elimina las anteriores noticias
    mostrarData.innerHTML = "";

    //por cada noticia
    for (let i = 0; i < noticias.length; i++){
        //obtiene el html de la noticia
        const noticia = noticiaTemplate(noticias[i])

        //pinta el html En la pagina
        mostrarData.insertAdjacentHTML('beforeend', noticia);
    }
}

//primera carga
const init = () => {
    pintarNoticias(dataSteam);
}

const btnProducto = document.getElementById("btn-product");

btnProducto.addEventListener("click", () => {
    pintarNoticias(filtrarCategorias.producto);
})

const btnGamer = document.getElementById("btn-gamer");
btnGamer.addEventListener("click", () => {
    pintarNoticias(filtrarCategorias.gamer);
})


const btnEuro = document.getElementById("btn-euro");
btnEuro.addEventListener("click", () => {
    pintarNoticias(filtrarCategorias.euro);
})

const btnBlog = document.getElementById("btn-blog");
btnBlog.addEventListener("click", () => {
    pintarNoticias(filtrarCategorias.blog);
})

const btnRock = document.getElementById("btn-rock");
btnRock.addEventListener("click", () => {
    pintarNoticias(filtrarCategorias.rock);
})

init();