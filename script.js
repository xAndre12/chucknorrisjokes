const showJoke = document.querySelector(".showJoke");
const joke = document.querySelector(".joke");


const getAPIData = (order) => {
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.value;
    });
  }
  showJoke.addEventListener("click",() =>{
    getAPIData()
    const audio = new Audio("./sound/Crowd laughing sound effects.mp3")
    audio.oncanplaythrough = function(){
        audio.play();
        }
    audio.volume = 0.2;
})