//const dataSteam = STEAM.appnews.newsitems;
const nuevaData= steam.dataMuestra(dataSteam); //nueva data filtrada
const filtrarCategorias= steam.categorias(dataSteam); //aqui llamo a mi data


const mostrarData = document.getElementById("pantalla-muestra");  //section donde se imprimira la data

const noticiaTemplate = (data) =>{//data = [{url, titulo, contenido}, {}, {}]
let news="";
for(let j=0; j < data.length; j++){ //recorre toda la data
   let item = `
   <div>
   <h1>${data[j].title}</h1>
   <a href="">${data[j].url}</a>
   <p>${data[j].contents}</p>
   </div>
   `
   ;
   news+=item; 
}
return news;
};

mostrarData.innerHTML = noticiaTemplate(dataSteam);
// noticiaTemplate(newsitems);













const btnProducto = document.getElementById("btn-product");
btnProducto.addEventListener("click", () => {

    let nombre = window.categorias();

    for (let i = 0; i < nombre.producto.length; i++){
        patallaMuestra.innerHTML += `
        <div>
        <h1>${nombre.producto[i].title}</h1>
        <p>${nombre.producto[i].url}</p>
        <p>${nombre.producto[i].contents}</p>      
        </div>
        `
        ;
        
        console.log(nombre.producto[i])
    }

})

const btnGamer = document.getElementById("btn-gamer");
btnGamer.addEventListener("click", () => {

    let nombre = window.categorias();

    for (let i = 0; i < nombre.gamer.length; i++){
        // patallaMuestra.innerHTML += `
        // <div>
        // <h1>${nombre.gammer[i].title}</h1>
        // <p>${nombre.gamer[i].url}</p>
        // <p>${nombre.gamer[i].contents}</p>      
        // </div>
        // `
        // ;

        console.log(nombre.gamer[i])
    }

})

const btnEuro = document.getElementById("btn-euro");
btnEuro.addEventListener("click", () => {

    let nombre = window.categorias();

    for (let i = 0; i < nombre.euro.length; i++){
        // return nombre.gamer[i];
        console.log(nombre.euro[i])
    }

})

const btnBlog = document.getElementById("btn-blog");
btnBlog.addEventListener("click", () => {

    let nombre = window.categorias();

    for (let i = 0; i < nombre.blog.length; i++){
        // return nombre.gamer[i];
        console.log(nombre.blog[i])
    }

})

const btnRock = document.getElementById("btn-rock");
btnRock.addEventListener("click", () => {

    let nombre = window.categorias();

    for (let i = 0; i < nombre.rock.length; i++){
        // return nombre.gamer[i]
        console.log(nombre.rock[i])
    }

})


