let recommend = document.querySelector(".recommend");
let artist = document.querySelector(".name");
let img = document.querySelector("img");
let font = document.querySelectorAll(".fonts");
let comment = document.querySelectorAll("blockquote");
let imp = document.querySelectorAll("span");

function mogbtn(){
  window.location.href = './index.html';
}

function yachibtn(){
  window.location.href = './yachi.html';
}

function amibtn(){
  window.location.href = './amiba.html';
}

for(let i of font) {
  i.style.fontSize = "30px";
}

for(let i of imp) {
  i.style.fontWeight = "bold";
}

function meibtn(){
  window.location.href = './meiry.html';
}

const scroll_to_top_btn = document.querySelector("#scroll-to-top")
function scroll_to_top(){
  window.scroll({top: 0, behavior: "smooth" })
}