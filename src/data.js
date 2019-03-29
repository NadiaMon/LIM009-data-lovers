const dataSteam = STEAM.appnews.newsitems;

/*nueva data para mostrar en primera pantalla*/ 
const dataMuestra = (data) => { 
    const arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push({ title: data[i].title, url: data[i].url, contents: data[i].contents });
    }
    return arr;
}

/*filtrado por categorías*/
const categorias = (data) => { /*data = [{ }, { }]*/

    const filtrado = {};

    const productUpdate = data.filter((producto) => { /*filter por canales*/
        return (producto.feedlabel === "Product Update");
    })

    filtrado.producto = productUpdate; /*propiedad:value que se agregan a filtrado*/

    const pcGamer = data.filter((gamer) => {
        return (gamer.feedlabel === "PC Gamer");
    })

    filtrado.gamer = pcGamer;

    const euroGamer = data.filter((euro) => {
        return (euro.feedlabel === "Eurogamer");
    })

    filtrado.euro = euroGamer;

    const tfBlog = data.filter((blog) => {
        return (blog.feedlabel === "TF2 Blog");
    })

    filtrado.blog = tfBlog;

    const rockPaperShotgun = data.filter((rock) => {
        return (rock.feedlabel === "Rock, Paper, Shotgun");
    })

    filtrado.rock = rockPaperShotgun;

    return filtrado;
}

/*funcion ordenando fechas*/

const ordenandoFechas = (data, cond) => {
    function ascendente(a,b){ 
        a = new Date((a.date) * 1000);
        b = new Date((b.date) * 1000);

        if (a > b) {
            return 1;
        } else if (b < a) {
            return -1;
        } else if (a === b) {
            return 0;
        }
    }
    if (cond === "ASC") {      
        return data.sort(ascendente);   
    }else if(cond === "DESC"){
        return data.sort(ascendente).reverse();
    }
}

console.log(ordenandoFechas(dataSteam,"ASC"));
console.log(ordenandoFechas(dataSteam,"DESC")); //revisar


window.steam = {  /*objeto que contiene todos los métodos*/
    dataMuestra: dataMuestra,
    categorias: categorias,
    ordenandoFechas: ordenandoFechas

}
