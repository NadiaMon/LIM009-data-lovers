//pintar elementos en el DOM

const pintado = document.getElementById("pantalla-muestra");
const btnProducto = document.getElementById("btn-product");

btnProducto.addEventListener("click", () => {

    let nombre = window.categorias();

    for (let i = 0; i < nombre.producto.length; i++) {

        return nombre.producto[i]
    }

})

