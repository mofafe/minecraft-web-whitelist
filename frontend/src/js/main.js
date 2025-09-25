let element = document.getElementById('mytext');

fetch("http://localhost:20000", {
  method: "POST",
  body: element.value,
});
