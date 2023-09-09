 let movie1 = {
    name: "star wars",
    Img: "https://th.bing.com/th/id/OIP.aLm8ECJKe3Fo1M0Khmjn1QHaEK?w=293&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
}

let movie2 = {
    name: "oppenheimer",
    img: "https://th.bing.com/th/id/R.3e5de892d76f9e9e46994b97aa41ef6b?rik=h3VFIMwRJ9s%2b5g&pid=ImgRaw&r=0"
    
}

let movie3 = {
    name: "avengers",
    img: "https://th.bing.com/th/id/OIP.bQfn3Pm9UaBJjftejo3gbgHaEK?w=266&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
    
}

let movies = [];
movies.push(movie1, movie2, movie3);


let movieContainer = document.getElementById("container");

movies.forEach((movie) =>{ movieContainer.innerHTML += `

 <div class="movie">
 <img src="${movie.img}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`})
