// Pull data from API
var xhReq = new XMLHttpRequest();
xhReq.open("GET", "/movies2", false);
xhReq.send(null);
var myData = JSON.parse(xhReq.responseText);

// Check work
console.log(myData);
console.log(myData[0].age)
console.log("BREAK")


// transform data from array of objects to array or arrays   
// var ArrData = myData.map(function(obj){
//     return Object.keys(obj).map(function(key){
//         return obj[key];
//     });
// });

// Check work
// console.log(ArrData)
// console.log(ArrData[0])

// Define Filter Variables
// var GenreFilter = d3.select("#selGenre").node().value; 
// // var AgeFilter = d3.select("#selAge").node().value; 
// var AgeFilter = "all"



// function GenreEvent(){
//     GenreFilter = d3.select("#selGenre").node().value; 
//     UpdateMovieList();
// }

// function AgeEvent(){
//     AgeFilter = d3.select("#selAge").node().value; 
//     UpdateMovieList()
// }

// I need a function that updates the variables and give it to the Final Dropdown function
var GenreFilter = d3.select("#selGenre").node().value;

// var AgeFilter = d3.select("#selAge").node().value; 
var AgeFilter = "7+" 

function FirstFilterG(){

    
}

function SecondFilterA(){


}

function FinalDropdown(){
    var MovieOptions = myData.filter(g =>{
        return g.genres === GenreFilter;
    }).filter(a =>{
        return a.age === AgeFilter;
    })
        
    var MovieTitles = MovieOptions.map(x => x.title)
    console.log(MovieTitles)
    
    var selector = d3.select("#selMovie");
              
        MovieTitles.forEach(function(userchoice){
                selector
                .append("option")
                .text(userchoice)
                .property("value", userchoice);
        });



}


// Filters info to get movie titles
// function MovieDropDownList(genre){

//     var GenreFilter = d3.select("#selGenre").node().value; 
// // var AgeFilter = d3.select("#selAge").node().value; 
//     var AgeFilter = "7+" 

//     var MovieOptions = ArrData.filter(g =>{
//         return g[2] === GenreFilter
//     }).filter(a =>{
//         return a[0] === AgeFilter
//     })
        
//     var MovieTitles = MovieOptions.map(x => x[9])
//     console.log(MovieTitles)
    
//     
    
//     // Populates the movie titles bases on filter.
//     var selector = d3.select("#selMovie");
          
//     MovieTitles.forEach(function(userchoice){
//             selector
//             .append("option")
//             .text(userchoice)
//             .property("value", userchoice);
//     });



// }
// function optionGenreChanged(clicked){
//     MovieDropDownList(clicked);
// }
// function optionAgeChanged(clicked){
//     MovieDropDownList(clicked)
// }
// MovieDropDownList();


// Create an event to trigger the first genre selection - optionGenreChanged
// Create an event to trigger the second age selection - optionAgeChanged




        
// Create function for when option changes in the movies, to populate all movie info.
// optionMovieChanged is the name in html
// return full array as object when option === a certain movie title from the selector.