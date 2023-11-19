//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=8Hni9T2HE0jGe0DDXI6brwIQdqtUjSsHE2xAfAcw&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src=data.url;
        document.querySelector('h2').innerText=data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}