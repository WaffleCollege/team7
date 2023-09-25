let recommend = document.querySelector(".recommend");
let artist = document.querySelector(".name");
let img = document.querySelector("img");

function mogbtn(){
  window.location.href = './index.html';
}

function yachibtn(){
  window.location.href = './yachi.html';
}

function amibtn(){
  window.location.href = './amiba.html';
}

function meibtn(){
  window.location.href = './meiry.html';
}

const scroll_to_top_btn = document.querySelector("#scroll-to-top")
function scroll_to_top(){
  window.scroll({top: 0, behavior: "smooth" })
}