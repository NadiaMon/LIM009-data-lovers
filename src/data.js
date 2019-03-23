/* Manejo de data 

esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
*/

const dataSteam = STEAM.appnews.newsitems;

/*

for(let i=0; i<dataSteam.length;i++){
    
    console.log(dataSteam[i]);
};

*/

//usando filter para separar data por canales

const productUpdate= dataSteam.filter((label)=>{
    return(label.feedlabel === "Product Update");
})

console.log(productUpdate);

const pcGamer= dataSteam.filter((gamer)=>{
    return(gamer.feedlabel === "PC Gamer");
})

console.log(pcGamer);

const euroGamer= dataSteam.filter((euro)=>{
    return(euro.feedlabel === "Eurogamer");
})

console.log(euroGamer);

const tfBlog= dataSteam.filter((blog)=>{
    return(blog.feedlabel === "TF2 Blog");
})

console.log(tfBlog);

const rockPaperShotgun= dataSteam.filter((rock)=>{
    return(rock.feedlabel === "Rock, Paper, Shotgun");
})

console.log(rockPaperShotgun);





