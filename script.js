// API used - https://docs.nekos.best/api/endpoints.html

const fetchImg = async () => {
    let url = 'https://nekos.best/api/v2/neko?amount=5';
    let response = await fetch(url);
    let json = await response.json();
    let images = document.querySelectorAll("img");
    for(let i = 0; i < images.length; i++) {
      images[i].src = json.results[i].url;
    }
  }
  
  document.querySelector("button").addEventListener("click",fetchImg);
  
  