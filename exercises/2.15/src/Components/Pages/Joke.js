const Joke = () => {
      
    fetch('https://v2.jokeapi.dev/joke/Dark?type=single')
    .then((response) => {
        
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        
        return response.json();
        
    })
    .then((response) => {
        renderJoke(response)
    })
    .catch((err) => {
        console.error('JOKE ::error: ', err);
    })
}




function renderJoke(joke) {
    const main = document.querySelector('main');
    main.innerHTML = `${joke.joke}`
}


export default Joke