//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class Netflix{
    constructor(showName,genre,director,budget){
        this.showName = showName;
        this.genre = genre;
        this.director = director;
        this.budget = budget;
    }
     cast(){
        console.log("so so cast has acted in the show");
    }
     crew(){
        console.log("crew members were acted in the movie");
    }
     production(){
        console.log("production house helped in producing the show");
    }
}

let Bridgerton = new Netflix("Bridgerton","period Romantic Drama","Dennis Ritchie","500million");
