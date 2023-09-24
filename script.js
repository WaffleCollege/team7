let recommend = document.querySelector(".recommend");
let artist = document.querySelector(".name");
let img = document.querySelector("img");

let mem;
function mogbtn(){
  recommend.textContent = "もぐものおすすめ";
  artist.textContent= "EGOIST";
  img.src="https://cdn.glitch.global/918393f5-9fc5-4e8c-860b-92334a5a9ad7/egoist3.jpg?v=1695485914732";
}

function yachibtn(){
  recommend.textContent = "やっちーのおすすめ"; 
  artist.textContent= "藤井風";
  img.src="https://cdn.glitch.global/918393f5-9fc5-4e8c-860b-92334a5a9ad7/egoist2.jpg?v=1695485514132";
}

function amibtn(){
  recommend.textContent = "あみばのおすすめ";
  artist.textContent= "Mrs.Green apple";
}

function meibtn(){
  recommend.textContent = "めいりーのおすすめ";
  artist.textContent= "Adele";
}

const scroll_to_top_btn = document.querySelector("#scroll-to-top")
function scroll_to_top(){
  window.scroll({top: 0, behavior: "smooth" })
}

console.log(img);