//pintar elementos en el DOM
// document.getElementById("pantalla-muestra").innerHTML = template();
//intentar mostrar data
 
const pintado = document.getElementById("pantalla-muestra");

const noticiaTemplate = (producto) =>{
    return`
    <a href ="${producto.url}" target="_blank" class="titulo-noticia">${producto.title}</a>
    <p>${producto.author}</p>
    <p>${producto.contents}</p>

    `;
}


const btnProducto = document.getElementById("btn-product");
btnProducto.addEventListener("click", () => {
    pintado.innerHTML = "";

    let nombre = window.categorias();

    for (let i = 0; i < nombre.producto.length; i++){
        // return nombre.producto[i];
       pintado.insertAdjacentHTML('beforeend',noticia);
    }
console.log(nombre.producto)
})

const btnGamer = document.getElementById("btn-gamer");
btnGamer.addEventListener("click", () => {

    let nombre = window.categorias();

    for (let i = 0; i < nombre.gamer.length; i++){
        // return nombre.gamer[i];
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


