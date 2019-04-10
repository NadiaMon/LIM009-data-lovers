/*  nueva data para mostrar en primera pantalla*/

const dataMuestra = (data) => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push({
      title: data[i].title, url: data[i].url, contents: data[i].contents,
      date: data[i].date
    });
  }
  return arr; 
};

/*  filtrado por categorías*/

const categorias = (data) => { /* [{}, {}]*/
  const filtrado = {};
  const productUpdate = data.filter((producto) => { /* filter por canales*/
    return (producto.feedlabel === 'Product Update');
  });

  filtrado.producto = productUpdate;

  const pcGamer = data.filter((gamer) => {
    return (gamer.feedlabel === 'PC Gamer');
  });

  filtrado.gamer = pcGamer;

  const euroGamer = data.filter((euro) => {
    return (euro.feedlabel === 'Eurogamer');
  });

  filtrado.euro = euroGamer;

  const tfBlog = data.filter((blog) => {
    return (blog.feedlabel === 'TF2 Blog');
  });

  filtrado.blog = tfBlog;

  const rockPaperShotgun = data.filter((rock) => {
    return (rock.feedlabel === 'Rock, Paper, Shotgun');
  });

  filtrado.rock = rockPaperShotgun;

  return filtrado;
};

/* función ordenando fechas*/

const ordenandoFechas = (data, sortOrder) => {
  const compare = (dateA, dateB) => {
    return dateA['date'] - dateB['date']; /* ascendente*/
  };
  const orderedData = data.concat().sort(compare);
  if (sortOrder === 'ASC') {
    return orderedData;        
  } else if (sortOrder === 'DESC') {
    return orderedData.reverse();
  } else {
    return data;
  }
};

/* función porcentajes*/

const computePercentage = (part, total) => { /* porcentaje*/
  return (part / total) * 100;
};

const computeCategoryStats = (data) => { /* porcentaje de filtrado*/
  const categories = categorias(data);
  const stats = Object.keys(categories).map((category) => {
    return {
      title: category,
      percentage: computePercentage(categories[category].length, data.length)
    };
  });
  return stats;
};
// return computeCategoryStats;
// computeCategoryStats(dataSteam);

window.steam = { /* objeto que contiene todos los métodos*/
  dataMuestra: dataMuestra,
  categorias: categorias,
  ordenandoFechas: ordenandoFechas,
  computePercentage: computePercentage,
  computeCategoryStats: computeCategoryStats
};
