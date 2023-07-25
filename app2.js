var addSearchBtn = document.getElementById("add-search");
var searchInput = document.getElementById("search");
var searchList = document.getElementById("search-list");

addSearchBtn.addEventListener("click", function() {
  var search = searchInput.value;
  addSearch(search);
  searchInput.value = "";
});

function addSearch(search) {
  var li = document.createElement("li");
  li.innerHTML = search;
  searchList.appendChild(li);
}
