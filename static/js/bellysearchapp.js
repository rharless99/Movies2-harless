// console.log("Testing")

// d3.json("http://127.0.0.1:5000/movies").then(function(data){
//     console.log(data)
// })

d3.json("/movies2").then(function(data){
    // console.log(data)

    function filterMovies() {
        // hard-coded filters for testing purposes - all working except for streaming platform
        var filters = {
            // netflix: 'true',
            genres: 'Comedy',
            age: '16+'
            // movieFilter: ''
        };
        // creates list: filteredMovies based on the above filters
        filteredMovies = Object.values(data).filter(function(item) {
            // console.log(item)
            for (var key in filters) {
            if (item[key] === undefined || item[key] != filters[key])
                return false;
            }
            return true;
        });
    
        console.log(filteredMovies)
        // filteredMovies.forEach(item => console.log(item));

    }
    filterMovies();
});

function ChosenData(userinput){
    d3.json("http://127.0.0.1:5000/movies2").then(function(data){
        var selectMovie = data.filter(function(x){
            // console.log(x);
            return x.title == userinput;
        });
        console.log(selectMovie);
        console.log("that was selectMovie");
        console.log(data);
        console.log("That was data");
        var currentObject = selectMovie[0];
        console.log(currentObject);
        console.log("that was currentObject");
        var demobox = d3.select("#sample-metadata");
        demobox.html("");
        Object.entries(currentObject).forEach(function([x, y]){
            return demobox.append("h4").text(`${x}: ${y}`);
        });       
    }); 
};
// Activate dropdown menu choices
function init() {
    var selector = d3.select("#selMovie");
    d3.json("http://127.0.0.1:5000/movies2").then(function(data){
        // console.log(data.title);
        
        // var movieNames = data.title;
        Object.entries(data).forEach(function(userChoice){
            var titlesList = userChoice[1].title
            selector
            .append("option")
            .text(titlesList)
            .property("value", titlesList);
        });
    var beginning = data[0];
    console.log(beginning);
    console.log("that was beginning");
    ChosenData(beginning.title);
    });
};

function optionMovieChanged(movieChosen){
    ChosenData(movieChosen);
}

init();
