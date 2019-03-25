//pintar elementos en el DOM
// document.getElementById("pantalla-muestra").innerHTML = template();
//intentar mostrar data
/* 
const pintado = document.getElementById("pantalla-muestra");
const addSteam= (noticias) => {
    for (let i = 0; i<noticias.length; i++){
        pintado.innerHTML +=
        <div>



        </div>
    }
}

*/

const patallaMuestra = document.getElementById('pantalla-muestra');


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
        
        //console.log(nombre.producto[i])
    }

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


