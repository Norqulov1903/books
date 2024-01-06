const inputBox = document.getElementById("input-box");
const results = document.getElementById("results");
const btn = document.getElementById('btn')
const elForm = document.getElementById('form')
const load = document.getElementById("preloader")
load.style.display = "none";
 btn.onclick=(event) =>   {
  event.preventDefault();
  load.style.display = "block";
    fetch("https://www.googleapis.com/books/v1/volumes/?" +
    new URLSearchParams({
        q: inputBox.value,
        maxResult: 12,
    }),
    {
        method: "GET",
    }
    )
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        res.items.forEach(element => {
          results.innerHTML += `<li>${element.volumeInfo.title}</li>`;
        });
    })
    .finally(function () {
      load.style.display = "none";
    });
  newresults();

};
function newresults (){
  results.innerHTML = "";
  btn();
}















