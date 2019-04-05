const dataSteam = STEAM.appnews.newsitems;

/*nueva data para mostrar en primera pantalla*/

const dataMuestra = (data) => {
    const arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push({
            title: data[i].title, url: data[i].url, contents: data[i].contents,
            date: new Date(data[i]["date"]*1000) 
        });
    }
    return arr; 
}

/*filtrado por categorías*/

const categorias = (data) => { /*data = [{ }, { }]*/

    const filtrado = {};

    const productUpdate = data.filter((producto) => { /*filter por canales*/
        return (producto.feedlabel === "Product Update");
    })

    filtrado.producto = productUpdate;

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

console.log(categorias(dataSteam));

/*función ordenando fechas*/

const ordenandoFechas = (data, sortOrder) => {
    const compare = (a, b) => {
        return a['date'] - b['date']; //ascendente
    }
    if (sortOrder === "ASC") {
        return data.concat().sort(compare);
         
    }
    else if (sortOrder === "DESC") {
        return data.concat().sort(compare).reverse();
    }
}

// console.log(dataSteam[0]);
// let dataSA = ordenandoFechas(dataSteam, "ASC");
// console.log(dataSteam[0]);
// let dataSD = ordenandoFechas(dataSteam, "DESC");
// console.log(dataSteam[0]);

/*
console.log(ordenandoFechas(dataSteam, "ASC"));
console.log(ordenandoFechas(dataSteam, "DESC"));
*/

/*función porcentajes*/

const computePercentage = (part, total) => { //porcentaje

    return (part / total) * 100

}

const computeCategoryStats = (data) => { //porcentaje de filtrado
  const categories = categorias(data);
  const stats = Object.keys(categories).map((category) => {
    return {
        title: category,
        percentage: computePercentage(categories[category].length, data.length)
    }
  })
 return stats;
}

computeCategoryStats(dataSteam);




















window.steam = {  /*objeto que contiene todos los métodos*/
    dataMuestra: dataMuestra,
    categorias: categorias,
    ordenandoFechas: ordenandoFechas,
    computeCategoryStats:computeCategoryStats
}
