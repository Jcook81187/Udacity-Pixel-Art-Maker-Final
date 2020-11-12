const myColor = document.querySelector("#colorPicker");
const myTable = document.querySelector("#pixelCanvas");
const mySize = document.querySelector("#sizePicker");
mySize.addEventListener("submit", function (e) {
  e.preventDefault();
  makeGrid();
});
function makeGrid() {
  myTable.innerHTML = "";
  let height2 = document.querySelector("#inputHeight").value;
  let width2 = document.querySelector("#inputWidth").value;
  for (let i = 0; i < height2; i++) {
    let rows = document.createElement("tr");
    for (let j = 0; j < width2; j++) {
      let columns = document.createElement("td");
      rows.appendChild(columns);
      columns.addEventListener("click", function (e) {
        e.target.style.backgroundColor = myColor.value;
      });
      myTable.appendChild(rows);
    }
  }
}