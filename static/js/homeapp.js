console.log("Testing")
// Jquery button alert message
$(document).ready(function(){
    $("button").click(function(){
        alert("Sending you to our awesome movie search page");
     });
});

console.log("Testing")

d3.json("/movies").then(function(data){
    console.log(data)
    title = data["title"]
   
    titles = []
    Object.entries (title).forEach(([key,value])=>{
        titles.push(value)
    })
    console.log(titles)

    imdb = data["imdb"]
    imdb_review = []
    Object.entries (imdb).forEach(([key,value])=>{
        imdb_review.push(value)
    })
    console.log(imdb_review)

    rotten_tm = data["rotten_tomatoes"]
    // title = title.map(obj=>obj.)
    review_rotten = []
    Object.entries (rotten_tm).forEach(([key,value])=>{
        review_rotten.push(value/10)
    })
    console.log(review_rotten)

    genre = data["genres"]
    genre_list = []
    Object.entries(genre).forEach(([Key, value]) =>{
        genre_list.push(value)
    })
    console.log(genre_list)

var trace1 = {
    y:imdb_review.slice(0,10),
    x:titles.slice(0,10),
    type:"bar", 
    orientaton: "h",
    name: "IMDB"
}
var trace2 = {
    y:review_rotten.slice(0,10),
    x:titles.slice(0,10),
    type:"bar", 
    orientaton: "h",
    name: "Rotten Tomatoes"
}
var layout ={
// width: 800, 
// height: 500,
barmode: "group",
title: "Movie Ratings",
xaxis: {
    title: "Top Ten Movies by Rotten Tomatoes",
    automargin: true
    },
yaxis: {
    title: "Corresponding IMDB Rating",
    automargin: true,

    }
}

var barData =[trace1, trace2]
Plotly.newPlot("bar", barData, layout)


// Get lists of unique genres and counts for the pie chart
function count_genre(genre_list) {
  var a = [],
    b = [],
    prev;

  genre_list.sort();
  for (var i = 0; i < genre_list.length; i++) {
    if (genre_list[i] !== prev) {
      a.push(genre_list[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = genre_list[i];
  }

  return [a, b];
}

var result = count_genre(genre_list);
console.log('[' + result[0] + ']','[' + result[1] + ']')

var tracePie = {
    values: result[1],
    labels: result[0],
    type: "pie"
}

var PieData = [tracePie]
 var PieLayout = {
     title: 'Genre Popularity',
     height: 400,
     width: 500,
     showlegend: true
       
 }

Plotly.newPlot("piechart", PieData, PieLayout)



})

