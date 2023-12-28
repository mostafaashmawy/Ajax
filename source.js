//very impoatant 
var allMovies=new XMLHttpRequest();
//herre we put new to take a copy of XMLHttpRequest and put it in api 
//and use its methods
var moviesList;
allMovies.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=31c8153e703e79d403e18546a3c7f492")//connection established
allMovies.send()
allMovies.addEventListener("readystatechange",function(){
    if(allMovies.readyState==4&&
        allMovies.status==200){
           
           moviesList=JSON.parse(allMovies.response).results;
            displayposts();
        }
});

function displayposts(){
    var cartoona=``;
    for(var i=0;i<moviesList.length;i++){
        cartoona+=`<div class ="col-md-3 ">
        <div class"movie position-relative">
        <img src="http://image.tmdb.org/t/p/w500${moviesList[i].poster_path}" class="w-100"/>
        <h2>${moviesList[i].title}</h2>
        <p>${moviesList[i].overview.split(" ").slice(0,10 ).join(" ")}</p>
        <div class="vote bg-info p-2 font-weight-bolder position-absolute">${moviesList[i].vote_average}</div>
        </div>
        </div>`
    }
    document.getElementById("rowdata").innerHTML=cartoona;
}                         






// if myapi.readystate=0-->request not initialized
// if myapi.readystate=1-->connection established
// if myapi.readystate=2-->request sent
// if myapi.readystate=3-->data processing
// if myapi.readystate=4-->response ready


// if myapi.status=404-->not found
// if myapi.status=403-->forbidden
// if myapi.status=200-->ok



//GET-->get data
//POST-->send data to backend
//PUT-->update data
//PATCH-->update data
//DELETE-->delete data